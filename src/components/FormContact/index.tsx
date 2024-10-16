import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdMessage } from "react-icons/md";
import send from "../../assets/send.png";

const FormContact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_m37wt6p", "template_ia9xrtm", form.current, {
          publicKey: "Mhkt8jzMefHLML8_7",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div className="pt-28">
      <h1 className="flex items-center text-3xl text-secondary font-bold mb-8">
        Write me a Message <MdMessage className="ml-2 text-primary" />
      </h1>
      <div className="lg:grid grid-cols-2">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-slate-200 py-9 px-5 flex flex-col rounded-3xl"
        >
          <label className="text-secondary font-semibold mb-1">Name</label>
          <input
            type="text"
            name="user_name"
            className="px-3 py-2 rounded-lg text-secondary mb-3 outline-none focus:ring-1 focus:ring-primary"
            placeholder="Your name..."
            required
          />
          <label className="text-secondary font-semibold mt-1">Email</label>
          <input
            type="email"
            name="user_email"
            className="px-3 py-2 rounded-lg text-secondary mb-3 outline-none focus:ring-1 focus:ring-primary"
            placeholder="Your email..."
            required
          />
          <label className="text-secondary font-semibold mt-1">Message</label>
          <textarea
            name="message"
            className="px-3 py-2 rounded-lg text-secondary mb-3 outline-none focus:ring-1 focus:ring-primary"
            placeholder="Write your message here..."
            required
          />
          <input
            type="submit"
            value="Send"
            className="bg-primary cursor-pointer lg:py-5 hover:bg-[#43318a] md:py-3 md:w-1/2 lg:w-1/4 md:px-5 py-3 mt-8 rounded-xl text-white font-semibold"
          />
        </form>
        <div>
          <img src={send} alt="send image" className="hidden lg:flex w-96 h-96 ml-56" />
        </div>
      </div>
    </div>
  );
};

export default FormContact;
