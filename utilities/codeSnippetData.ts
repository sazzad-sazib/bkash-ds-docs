export const typographySnippet = {
    jsx: `<div>
  <h1>h1 - bKash</h1>
  <h2>h2 - bKash</h2>
  <h3>h3 - bKash</h3>
  <h4>h4 - bKash</h4>
  <h5>h5 - bKash</h5>
  <h6>h6 - bKash</h6>
  <p>p - bKash</p>
</div>`,
    html: `<div>
  <h1>h1 - bKash</h1>
  <h2>h2 - bKash</h2>
  <h3>h3 - bKash</h3>
  <h4>h4 - bKash</h4>
  <h5>h5 - bKash</h5>
  <h6>h6 - bKash</h6>
  <p>p - bKash</p>
</div>`,
}

export const typographyExactSnippet = {
    jsx: `<div>
\t<p className="font-sans font-black text-6xl text-gray-800 my-6">
\t\th1 - bKash
\t</p>
\t<p className="font-sans font-extrabold text-5xl text-gray-800 my-5">
\t\th2 - bKash
\t</p>
\t<p className="font-sans font-bold text-4xl text-gray-700 my-4">
\t\th3 - bKash
\t</p>
\t<p className="font-sans font-semibold text-3xl text-gray-700 my-3">
\t\th4 - bKash
\t</p>
\t<p className="font-sans font-medium text-2xl text-gray-700 my-2">
\t\th5 - bKash
\t</p>
\t<p className="font-sans font-medium text-xl text-gray-700 my-2">
\t\th6 - bKash
\t</p>
\t<p className="text-gray-700">p - bKash</p>
\t<a
\t\tclassName="font-medium underline text-primary"
\t\thref="www.bkash.com"
\t>
\t\ta link
\t</a>
</div>;`,
    html: `<div>
\t<p class="font-sans font-black text-6xl text-gray-800 my-6">
\t\th1 - bKash
\t</p>
\t<p class="font-sans font-extrabold text-5xl text-gray-800 my-5">
\t\th2 - bKash
\t</p>
\t<p class="font-sans font-bold text-4xl text-gray-700 my-4">
\t\th3 - bKash
\t</p>
\t<p class="font-sans font-semibold text-3xl text-gray-700 my-3">
\t\th4 - bKash
\t</p>
\t<p class="font-sans font-medium text-2xl text-gray-700 my-2">
\t\th5 - bKash
\t</p>
\t<p class="font-sans font-medium text-xl text-gray-700 my-2">
\t\th6 - bKash
\t</p>
\t<p class="text-gray-700">p - bKash</p>
\t<a
\t\tclass="font-medium underline text-primary"
\t\thref="www.bkash.com"
\t>
\t\ta link
\t</a>
</div>`,
}

export const tailwindLayerExtention =
    `@layer base {
  h1 {
    @apply font-sans font-black text-6xl text-gray-800 my-6
  }
  h2 {
    @apply font-sans font-extrabold text-5xl text-gray-800 my-5
  }
  h3 {
    @apply font-sans font-bold text-4xl text-gray-700 my-4
  }
  h4 {
    @apply font-sans font-semibold text-3xl text-gray-700 my-3
  }
  h5 {
    @apply font-sans font-medium text-2xl text-gray-700 my-2
  }
  h6 {
    @apply font-sans font-medium text-xl text-gray-700 my-2
  }
  a {
    @apply font-medium underline text-primary
  }
  p ,div {
    @apply text-gray-700
  }
}`