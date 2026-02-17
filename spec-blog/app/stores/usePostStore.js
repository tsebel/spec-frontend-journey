import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useAuthStore } from './useAuthStore'
import { useRouter } from 'vue-router'
export const usePostStore = defineStore('posts', () => {

const initialPosts = [
{
id: 1,
category: 'Philosophy',
title: 'The Architecture of Silence',
content: 'In a world that never stops talking, silence has become a luxury. We often mistake noise for progress and constant communication for connection. However, the most profound ideas usually grow in the quiet spaces between our thoughts. Learning to sit with silence is not just a meditation practice; it is a survival skill for the modern era. When we quiet the external chatter, we finally begin to hear the internal compass that has been trying to guide us all along.',
image: '',
likes: 0,
views: 0,
comments: [], 
shares: 0

},
{
id: 2,
category: 'Technology',
title: 'Beyond the Silicon Veil',
content: 'Artificial Intelligence is no longer a sub-plot of science fiction. It is the invisible thread weaving through our daily lives. From the algorithms that suggest our morning music to the systems managing global logistics, we are living in a symbiosis with machines. The question is no longer whether AI will change the world, but how we will maintain our humanity as the line between biological and digital intelligence continues to blur.',
image: '',
likes: 0,
views: 0,
comments: [], 
shares: 0

},
{
id: 3,
category: 'Design',
title: 'Minimalism: More than Aesthetic',
content: 'Minimalism is often criticized as being "empty" or "cold." But true minimalism is the intentional promotion of the things we most value and the removal of everything that distracts us from them. In design, this means every pixel must earn its right to exist. If a button doesn’t serve a purpose, it shouldn’t be there. If a color doesn’t evoke the right emotion, it’s clutter. Design is about solving problems, not just decorating them.',
image: '',
likes: 0,
views: 0,
comments: [], 
shares: 0

},
{
id: 4,
category: 'Productivity',
title: 'The Myth of Multi-tasking',
content: 'Our brains are not wired to do two things at once; they are wired to switch between tasks rapidly. This "switching cost" drains our mental energy and lowers the quality of our output. Deep work—the ability to focus without distraction on a cognitively demanding task—is the superpower of the 21st century. If you want to produce something of value, you must learn to close the tabs, put away the phone, and commit to one single path for hours at a time.',
image: '',
likes: 0,
views: 0,
comments: [], 
shares: 0

},
{
id: 5,
category: 'Lifestyle',
title: 'Morning Rituals for the Soul',
content: 'How you spend the first hour of your day often dictates the remaining fifteen. Instead of reaching for your phone and absorbing the world’s problems before you’ve even brushed your teeth, try a "low-input" morning. Drink water, look at the sun, write down one thing you are grateful for. By creating a protective barrier around your early morning mind, you build a reservoir of peace that stays with you through the afternoon rush.',
image: '',
likes: 0,
views: 0,
comments: [], 
shares: 0

},
{
id: 6,
category: 'Tech',
title: 'The Future of the Decentralized Web',
content: 'Web3 is often dismissed as hype, but the underlying desire for a decentralized internet is real. As users grow weary of data silos and algorithmic manipulation, the shift toward ownership-based platforms is inevitable. Imagine a digital world where you own your identity, your data, and your creative output, moving freely between applications without needing permission from a tech giant.',
image: '',
likes: 0,
views: 0,
comments: [], 
shares: 0

},
{
id: 7,
category: 'Philosophy',
title: 'Stoicism in a Chaotic World',
content: 'The core of Stoicism is simple: distinguish between what you can control and what you cannot. We waste so much energy fighting the weather, the traffic, and the opinions of others. When we accept that these things are external, we can redirect our power toward our own reactions. Happiness is not the absence of problems, but the mastery of our response to them.',
image: '',
likes: 0,
views: 0,
comments: [], 
shares: 0

},
{
id: 8,
category: 'Design',
title: 'Typography: The Voice of Content',
content: 'If content is the message, typography is the tone of voice. A serif font whispers tradition and authority, while a geometric sans-serif screams modernism and efficiency. Great designers don’t just pick "pretty" fonts; they pick fonts that reinforce the emotional narrative of the text. Never let the layout distract from the legibility of the human word.',
image: '',
likes: 0,
views: 0,
comments: [], // array of { id, text, date }
shares: 0

},
{
id: 9,
category: 'Travel',
title: 'The Case for Slow Travel',
content: 'Travel is often treated like a checklist. We rush from landmark to landmark, taking photos to prove we were there, but never actually "being" there. Slow travel is about staying in one neighborhood for a month. It is about learning the name of the barista at the corner shop and finding the hidden parks that tourists never see. It is the difference between seeing a place and experiencing it.',
image: '',
likes: 0,
views: 0,
comments: [], // array of { id, text, date }
shares: 0

},
{
id: 10,
category: 'Productivity',
title: 'Rest as a Competitive Advantage',
content: 'In our hustle culture, we view sleep and rest as laziness. But the science is clear: the brain processes information and solves complex problems during downtime. Some of the greatest breakthroughs in history happened while the thinker was taking a walk or a nap. If you want to work better, you must learn to rest better. Burnout is not a badge of honor; it is a failure of sustainability.',
image: '',
likes: 0,
views: 0,
comments: [], // array of { id, text, date }
shares: 0

},
{
id: 11,
category: 'Tech',
title: 'Quantum Computing Explained',
content: 'Classic computers use bits (0s and 1s). Quantum computers use qubits, which can exist in multiple states at once. This isn’t just a faster way of doing math; it’s a completely different way of processing reality. While still in its infancy, quantum computing holds the key to curing diseases, perfecting battery technology, and breaking current encryption methods. We are standing at the edge of a new era of calculation.',
image: '',
likes: 0,
views: 0,
comments: [], // array of { id, text, date }
shares: 0

},
{
id: 12,
category: 'Lifestyle',
title: 'The Joy of Analog Hobbies',
content: 'In an era where our professional lives are entirely digital, there is a growing hunger for the tactile. Gardening, pottery, woodworking, or film photography offer something the screen cannot: physical friction. There is a specific kind of satisfaction in making something with your hands that exists in the physical world. It grounds us and reminds us that we are more than just consumers of content.',
image: '',
likes: 0,
views: 0,
comments: [], // array of { id, text, date }
shares: 0

},
{
id: 13,
category: 'Health',
title: 'Digital Detoxing for Mental Clarity',
content: 'Our dopamine loops are being hijacked by notification red dots. A digital detox isn’t about living in a cave; it’s about regaining agency over your attention. Try one day a week without a screen. You will feel bored at first, then restless, and then—eventually—you will feel creative. That creativity is what happens when your brain is no longer being fed a constant stream of external stimuli.',
image: '',
likes: 0,
views: 0,
comments: [], // array of { id, text, date }
shares: 0

},
{
id: 14,
category: 'Philosophy',
title: 'The Paradox of Choice',
content: 'We believe that more options lead to more freedom. But when we have too many choices, we suffer from "analysis paralysis" and, ultimately, less satisfaction with our final decision. By limiting our choices and committing to a path, we actually find more peace. True freedom isn’t having everything available; it’s knowing what you don’t need.',
image: '',
likes: 0,
views: 0,
comments: [], // array of { id, text, date }
shares: 0

},
{
id: 15,
category: 'Environment',
title: 'Circular Economy: The Path Forward',
content: 'The "take-make-waste" model of the industrial age is failing. The circular economy proposes a system where waste is designed out and materials are kept in use indefinitely. From modular smartphones to clothing rental services, we are seeing the beginning of a world where we value access over ownership and durability over disposability.',
image: '',
likes: 0,
views: 0,
comments: [], // array of { id, text, date }
shares: 0

},
{
id: 16,
category: 'Culture',
title: 'The Evolution of Modern Cinema',
content: 'Streaming platforms have changed how stories are told. We are moving away from the 2-hour blockbuster toward the 8-hour "limited series." This gives creators the room to build complex characters and slow-burn plots that cinema simply couldn’t handle. We are in a golden age of television where the line between "TV" and "Movies" has finally disappeared.',
image: '',
likes: 0,
views: 0,
comments: [], // array of { id, text, date }
shares: 0

},
{
id: 17,
category: 'Tech',
title: 'Cybersecurity in the 2020s',
content: 'The front lines of modern warfare are fought in code. As our infrastructure becomes more connected, it becomes more vulnerable. Cybersecurity is no longer just "IT’s problem"—it is a fundamental pillar of national and personal safety. From multi-factor authentication to zero-trust architecture, the way we protect our digital lives is undergoing a massive revolution.',
image: '',
likes: 0,
views: 0,
comments: [], // array of { id, text, date }
shares: 0

},
{
id: 18,
category: 'Lifestyle',
title: 'Building a Home Library',
content: 'A room without books is like a body without a soul. A home library isn’t about showing off what you’ve read; it’s a living record of your curiosity. Surrounding yourself with physical books reminds you of what you have yet to learn. It creates an atmosphere of intellectual humility and constant discovery.',
image: '',
likes: 0,
views: 0,
comments: [], // array of { id, text, date }
shares: 0

},
{
id: 19,
category: 'Business',
title: 'The Ethics of Remote Work',
content: 'Remote work has granted us freedom, but it has also blurred the boundary between our private and professional lives. Companies now have to learn how to lead through trust rather than surveillance. The future of work isn’t just about where we sit, but how we measure value when the office clock is no longer ticking.',
image: '',
likes: 0,
views: 0,
comments: [], // array of { id, text, date }
shares: 0

},
{
id: 20,
category: 'Design',
title: 'The Psychology of Color',
content: 'Color is the most immediate way to communicate a brand’s values. Blue builds trust (banks), red creates urgency (fast food), and green evokes health (nature). Understanding the psychological triggers behind the color wheel allows designers to influence user behavior before they even read a single word of copy.',
image: '',
likes: 0,
views: 0,
comments: [], // array of { id, text, date }
shares: 0

},
] 

const posts = ref(
    typeof window !== 'undefined' // check if we are in the browser
      ? JSON.parse(localStorage.getItem('posts')) || initialPosts
      : initialPosts
  )
  watch(
  posts,
  (newPosts) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('posts', JSON.stringify(newPosts))
    }
  },
  { deep: true } // deep: true ensures nested changes (likes, views, comments) are detected
)

const savePosts = () => {
    localStorage.setItem('posts', JSON.stringify(posts.value))
  }

  // Add a new post
  const addPost = (post) => {
    posts.value.unshift({
      ...post,
      id: Date.now(), // unique ID
      date: new Date().toLocaleDateString(),
      excerpt: post.excerpt || (post.content.slice(0, 150) + '...'),
      image: post.image || 'https://images.unsplash.com/photo-1492724441997-5dc865305da7'
    })
    savePosts()
  }

  // Update an existing post by id
  const updatePost = (id, updatedPost) => {
    const index = posts.value.findIndex(p => p.id === id)
    if (index !== -1) {
      posts.value[index] = {
        ...posts.value[index],
        ...updatedPost,
        excerpt: updatedPost.excerpt || (updatedPost.content.slice(0, 150) + '...')
      }
      savePosts()
    }
  }

  // Delete a post by id
  const deletePost = (id) => {
    posts.value = posts.value.filter(p => p.id !== id)
    savePosts()
  }

  // Like a post
const auth = useAuthStore()
const router = useRouter()

const likePost = (id) => {
  if (!auth.isLoggedIn) {
    router.push('/login')
    return
  }

  const post = posts.value.find(p => p.id === id)
  if (post) {
    post.likes++
    savePosts()
  }
}


// Add a comment
const addComment = (id, text) => {
  const post = posts.value.find(p => p.id === id)
  if (post && text.trim()) {
    post.comments.push({
      id: Date.now(),
      text,
      date: new Date().toLocaleDateString()
    })
    
  }
}

// Share a post
const sharePost = (id) => {
  if (!auth.isLoggedIn) {
    router.push('/login')
    return
  }

  const post = posts.value.find(p => p.id === id)
  if (post) {
    post.shares++
    savePosts()
  }
}


// // Track views
// const viewPost = (id) => {
//   const post = posts.value.find(p => p.id === id)
//   if (post) {
//     post.views++
    
//   }
// }

  return { posts, addPost, updatePost, deletePost, likePost, addComment, sharePost, viewPost }
})








