import SectionHeader from "../../common/SectionHeader";
import ContactGrid from "./ContactGrid";

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5">

        <SectionHeader
          command="contact.exe"
          title="Communication Center"
          subtitle="Choose your preferred way to connect with me."
        />

        <div className="mt-12">
          <ContactGrid />
        </div>

      </div>
    </section>
  );
}

export default Contact;