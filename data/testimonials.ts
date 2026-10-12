// Source: content doc, Testimonials tab (final version, Oct 12). The tab lists only these two testimonials.
// Companies are left out of the roles at the client's request (Oliv, Oct 12).
// TODO: confirm the client names are approved for publishing.
export type Testimonial = { quote: string; name: string; role: string };

export const testimonials: Testimonial[] = [
  { quote: "I had the pleasure of hosting the event and meeting so many inspiring tech professionals, students, and enthusiasts. Special thanks to Bade Adesemowo, Co-Founder & CTO of eMigr8.AI, for sharing powerful insights on the UK Tech Talent Visa and how to grow in tech globally. We had exciting talks, success stories, live Q&A, and of course, great networking! Here are some photos and videos from the event – thank you to everyone who joined us and made it such a memorable evening!", name: "Leyla Belazregue", role: "Aspiring Cyber Security Engineer" },
  { quote: "I had the pleasure of hosting the event and meeting so many inspiring tech professionals, students, and enthusiasts. Special thanks to Bade Adesemowo Co-Founder & CTO of eMigr8.AI, for sharing powerful insights on the UK Tech Talent Visa and how to grow in tech globally. We had exciting talks, success stories, live Q&A, and of course, great networking.", name: "Anas Abubakar", role: "BEng Computer System Engineer" },
];
