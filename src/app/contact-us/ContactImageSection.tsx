import React from "react";

const ContactImageSection = () => (
  <div className="w-full flex justify-center py-8">
    <div className="w-full h-[550px] relative rounded overflow-hidden">
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.6129491296747!2d7.005704784636613!3d5.4755294203001315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042597932adc91f%3A0xbc9b68d28b3fb2ca!2sIMO%20State%20Secretariat!5e0!3m2!1sen!2sng!4v1755606735203!5m2!1sen!2sng" 

        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
   
    </div>
  </div>
);

export default ContactImageSection; 