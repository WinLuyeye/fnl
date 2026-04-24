export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Forum National de la Logistique RDC 2027",
    startDate: "2027-05",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode:
      "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Kinshasa",
      address: {
        "@type": "PostalAddress",
        addressCountry: "CD",
      },
    },
    image: ["https://fnl-rdc.com/og-image.jpg"],
    description:
      "Le plus grand événement logistique en RDC réunissant les acteurs du transport et de la supply chain.",
    organizer: {
      "@type": "Organization",
      name: "FNL RDC",
      url: "https://fnl-rdc.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}