import Image from "next/image";

interface MissionVisionCardProps {
  missionTitle: string;
  missionText: string;
  missionImage: string;
  visionTitle: string;
  visionText: string;
  visionImage: string;
}

const MissionVisionCard = ({
  missionTitle,
  missionText,
  missionImage,
  visionTitle,
  visionText,
  visionImage,
}: MissionVisionCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border p-4 lg:px-14 py-4 lg:py-20 min-h-max">
      {/* Mission Section */}
      <div className="bg-[#06163A] text-white p-6 py-16 flex flex-col justify-center rounded-lg">
        <h2 className="text-2xl font-bold mb-4">{missionTitle}</h2>
        <p className="text-sm leading-relaxed">{missionText}</p>
      </div>

      <div className="relative w-full h-64 md:h-auto rounded-lg overflow-hidden">
        <Image
          src={missionImage}
          alt="Mission"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative w-full h-64 md:h-auto rounded-lg overflow-hidden">
        <Image
          src={visionImage}
          alt="Vision"
          fill
          className="object-cover"
        />
      </div>

      <div className="bg-white text-gray-800 p-6 py-16 flex flex-col justify-center rounded-lg">
        <h2 className="text-2xl font-bold mb-4">{visionTitle}</h2>
        <p className="text-sm leading-relaxed">{visionText}</p>
      </div>
    </div>
  );
};

export default MissionVisionCard;
