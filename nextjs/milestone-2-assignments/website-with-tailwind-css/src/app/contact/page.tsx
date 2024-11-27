function Contact() {
    return (
        <div className="px-5 py-5 rounded-md w-[80%] max-w-[800px] mx-auto my-5 bg-[#3a2423] text-white">
            <h1 className="text-center text-4xl mb-5">Contact Us</h1>
            <p className="text-xl text-white leading-6 mb-4">
                We would love to hear from you! Whether you have a question, want to book an appointment, or share feedback, feel free to reach out to us.
            </p>
            <div className="mb-7">
                <p><strong>Phone:</strong> 0321-9988776</p>
                <p><strong>Email:</strong> contact@beautysalon.com</p>
                <p><strong>Address:</strong> 123 Beauty St, Karachi</p>
            </div>
            <div className="bg-[#2f1f1e] p-5 rounded-lg">
                <form method="post">
                    <label htmlFor="name" className="text-white block mb-2">Your Name</label>
                    <input type="text" id="name" name="name" required className="w-full p-3 mb-4 rounded-md border-none bg-[#eee2ba] text-[#3a2423]" />

                    <label htmlFor="email" className="text-white block mb-2">Your Email</label>
                    <input type="email" id="email" name="email" required className="w-full p-3 mb-4 rounded-md border-none bg-[#eee2ba] text-[#3a2423]" />

                    <label htmlFor="message" className="text-white block mb-2">Your Message</label>
                    <textarea id="message" name="message" required className="w-full p-3 mb-4 rounded-md border-none bg-[#eee2ba] text-[#3a2423]" ></textarea>

                    <button type="submit" className="w-[40%] p-3 bg-[#ee4c7c] text-white rounded-full cursor-pointer hover:bg-[#e3afbc]">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
