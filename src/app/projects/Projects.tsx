"use client";
import React, { useEffect, useState, FC } from "react";
import Image from "next/image";
import { contentfulService } from "@/lib/contentful";

// Define the interface for your project data
export interface ProjectPost {
  sys: { id: string };
  fields: {
    projectTitle?: string;
    projectDescription?: string;
    startDate?: string;
    proposedEndDate?: string;
    projectImage?: {
      fields?: {
        title?: string;
        file?: {
          url?: string;
        };
      };
    };
    partnerNames?: string;
  };
}

// ✅ ProjectCard Component inside the same file
interface ProjectCardProps {
  status: string;
  title: string;
  description: string;
  partnerNames?: string;
  imageUrl?: string;
}

const statusColors: Record<string, string> = {
  Ongoing: "text-green-600 bg-green-100",
  Closed: "text-red-600 bg-red-100",
};

const ProjectCard: FC<ProjectCardProps> = ({
  status,
  title,
  description,
  partnerNames,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-6 mb-6">
      {/* Image */}
      {imageUrl && (
        <div className="w-full md:w-1/3">
          <Image
            src={`https:${imageUrl}`}
            alt={title}
            width={500}
            height={300}
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-2">
          <h2 className="text-md lg:text-lg font-semibold text-gray-900">{title}</h2>
          <span
            className={`text-sm font-medium my-4 lg:my-0	 px-3 py-1 rounded-full ${
              statusColors[status] || "bg-gray-100 text-gray-600"
            }`}
          >
            {status}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-[#f7f9fa] p-4 rounded-lg">
          
            <div>
              <p className="text-gray-400">State</p>
              <p className="font-medium">Imo State</p>
            </div>
        
         
          {partnerNames && (
            <div>
              <p className="text-gray-400">Partners</p>
              <p className="font-medium">{partnerNames}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ✅ Main Projects Component
export default function Projects() {
  const [activeProjects, setActiveProjects] = useState<ProjectPost[]>([]);
  const [closedProjects, setClosedProjects] = useState<ProjectPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const projects = await contentfulService.getProjectsByMinistryId(
          process.env.NEXT_PUBLIC_MINISTRY_ID || ""
        );

        const now = new Date();

        const parseDate = (dateStr?: string) => {
          if (!dateStr) return null;
          const [day, month, year] = dateStr.split("-").map(Number);
          const date = new Date(year, month - 1, day);
          return isNaN(date.getTime()) ? null : date;
        };

        const active = projects.filter((project: ProjectPost) => {
          const endDate = parseDate(project.fields?.proposedEndDate);
          if (!endDate) return true;
          return endDate >= now;
        });

        const closed = projects.filter((project: ProjectPost) => {
          const endDate = parseDate(project.fields?.proposedEndDate);
          if (!endDate) return false;
          return endDate < now;
        });

        setActiveProjects(active);
        setClosedProjects(closed);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="w-full py-16 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-16 flex justify-center items-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Active Projects</h1>
      {activeProjects.length === 0 ? (
        <p className="text-gray-500">No active projects found.</p>
      ) : (
        activeProjects.map((proj) => (
          <ProjectCard
            key={proj.sys.id}
            status="Ongoing"
            title={proj.fields.projectTitle || "Untitled"}
            description={proj.fields.projectDescription || ""}
            partnerNames={proj.fields.partnerNames}
            imageUrl={proj.fields.projectImage?.fields?.file?.url}
          />
        ))
      )}

      <h1 className="text-2xl font-bold mt-12 mb-6">Closed Projects</h1>
      {closedProjects.length === 0 ? (
        <p className="text-gray-500">No closed projects found.</p>
      ) : (
        closedProjects.map((proj) => (
          <ProjectCard
            key={proj.sys.id}
            status="Closed"
            title={proj.fields.projectTitle || "Untitled"}
            description={proj.fields.projectDescription || ""}
            partnerNames={proj.fields.partnerNames}
            imageUrl={proj.fields.projectImage?.fields?.file?.url}
          />
        ))
      )}
    </main>
  );
}
