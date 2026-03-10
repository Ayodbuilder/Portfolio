import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

function Contact() {
  return (

<section className="relative min-h-screen py-16 text-white overflow-hidden">

{/* Animated Glowing Background */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

<motion.div
className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30"
animate={{
x: [0, 120, -120, 0],
y: [0, -80, 80, 0],
}}
transition={{
duration: 12,
repeat: Infinity,
ease: "easeInOut",
}}
/>

<motion.div
className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30"
animate={{
x: [0, -150, 150, 0],
y: [0, 100, -100, 0],
}}
transition={{
duration: 14,
repeat: Infinity,
ease: "easeInOut",
}}
/>

</div>


{/* Glass Container */}
<motion.div
className="relative max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10"
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
>

<h1 className="text-3xl font-bold mb-6 text-center">
Contact Me
</h1>

<p className="text-gray-400 mb-10 text-center">
If you'd like to work with me, collaborate on a project, or just say hello,
feel free to send me a message.
</p>


{/* Social Links */}
<div className="flex justify-center gap-6 mb-12 flex-wrap">

<motion.a
whileHover={{ scale: 1.08 }}
href="mailto:olayinkavictor68@gmail.com"
className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-lg"
>
<FaEnvelope />
Email
</motion.a>

<motion.a
whileHover={{ scale: 1.08 }}
href="https://github.com/Ayodbuilder"
target="_blank"
rel="noopener noreferrer"
className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-lg"
>
<FaGithub />
GitHub
</motion.a>

<motion.a
whileHover={{ scale: 1.08 }}
href="https://linkedin.com/in/victor-kehinde-94932622b"
target="_blank"
rel="noopener noreferrer"
className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-lg"
>
<FaLinkedin />
LinkedIn
</motion.a>

</div>


{/* Contact Form */}
<form className="space-y-4">

<div>
<label className="block mb-1 text-sm">Name</label>
<input
type="text"
placeholder="Your Name"
className="w-full p-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 focus:outline-none focus:border-white"
/>
</div>

<div>
<label className="block mb-1 text-sm">Email</label>
<input
type="email"
placeholder="you@email.com"
className="w-full p-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 focus:outline-none focus:border-white"
/>
</div>

<div>
<label className="block mb-1 text-sm">Message</label>
<textarea
rows="5"
placeholder="Write your message..."
className="w-full p-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 focus:outline-none focus:border-white"
/>
</div>

<motion.button
whileHover={{ scale: 1.05 }}
type="submit"
className="bg-white text-black px-6 py-3 rounded-lg font-medium transition hover:bg-gray-300"
>
Send Message
</motion.button>

</form>

</motion.div>

</section>
  )
}

export default Contact
