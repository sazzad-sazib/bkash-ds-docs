import ImageIcon from '../public/taka.svg';

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
\t<p className="font-sans font-black text-6xl text-gray-800 my-6">h1 - bKash</p>
\t<p className="font-sans font-extrabold text-5xl text-gray-800 my-5">h2 - bKash</p>
\t<p className="font-sans font-bold text-4xl text-gray-700 my-4">h3 - bKash</p>
\t<p className="font-sans font-semibold text-3xl text-gray-700 my-3">h4 - bKash</p>
\t<p className="font-sans font-medium text-2xl text-gray-700 my-2">h5 - bKash</p>
\t<p className="font-sans font-medium text-xl text-gray-700 my-2">h6 - bKash</p>
\t<p className="text-gray-700">p - bKash</p>
\t<a className="font-medium underline text-primary" href="www.bkash.com">
\t\ta link
\t</a>
</div>`,
    html: `<div>
\t<p class="font-sans font-black text-6xl text-gray-800 my-6">h1 - bKash</p>
\t<p class="font-sans font-extrabold text-5xl text-gray-800 my-5">h2 - bKash</p>
\t<p class="font-sans font-bold text-4xl text-gray-700 my-4">h3 - bKash</p>
\t<p class="font-sans font-semibold text-3xl text-gray-700 my-3">h4 - bKash</p>
\t<p class="font-sans font-medium text-2xl text-gray-700 my-2">h5 - bKash</p>
\t<p class="font-sans font-medium text-xl text-gray-700 my-2">h6 - bKash</p>
\t<p class="text-gray-700">p - bKash</p>
\t<a class="font-medium underline text-primary" href="www.bkash.com">
\t\ta link
\t</a>
</div>;`,
}

export const tailwindLayerExtention = `@layer base {
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

export const tailwindFontColorImport = `const colors =require('tailwindcss/colors');
theme: {
    colors: {
      primary: '#d82a77',
      ...colors,
    },
    extend: {},
  },`


export const shadowExampleLive = {
    jsx: `<div className="shadow-sm rest-shadow-classes">
  Shadow Sample
</div>`,
    html: `<div class="shadow-sm rest-shadow-classes">
  Shadow Sample
</div>`
}

export const buttonDataSizes = {
    jsx: `<div className="button-layout">
  <button
    type="button"
    className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-primary hover:bg-pink-700 focus:outline-none"
  >
    btn xs
  </button>
  <button
    type="button"
    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-primary hover:bg-pink-700 focus:outline-none"
  >
    btn sm
  </button>
  <button
    type="button"
    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-pink-700 focus:outline-none"
  >
    btn md
  </button>
  <button
    type="button"
    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-pink-700 focus:outline-none"
  >
    btn lg
  </button>
  <button
    type="button"
    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-pink-700 focus:outline-none"
  >
    btn xl
  </button>
</div>`,
    html: `<div class="button-layout">
  <button
    type="button"
    class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-primary hover:bg-pink-700 focus:outline-none"
  >
    btn xs
  </button>
  <button
    type="button"
    class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-primary hover:bg-pink-700 focus:outline-none"
  >
    btn sm
  </button>
  <button
    type="button"
    class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-pink-700 focus:outline-none"
  >
    btn md
  </button>
  <button
    type="button"
    class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-pink-700 focus:outline-none"
  >
    btn lg
  </button>
  <button
    type="button"
    class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-pink-700 focus:outline-none"
  >
    btn xl
  </button>
</div>`
}

export const buttonDataVariant = {
    jsx: `<div>
  <div className="button-layout">
    <button
      type="button"
      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-green-600 bg-green-100 hover:bg-green-100 focus:outline-none"
    >
      outline
    </button>
    <button
      type="button"
      className="inline-flex items-center px-3 py-2 border text-sm leading-4 font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 focus:outline-none"
    >
      default
    </button>
    <button
      type="button"
      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none"
    >
      success
    </button>
    <button
      type="button"
      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none"
    >
      danger
    </button>
    <button
      type="button"
      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none"
    >
      alert
    </button>
    <button
      type="button"
      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none"
    >
      warning
    </button>
     <button
      type="button"
      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-primary hover:bg-pink-700 focus:outline-none"
    >
      primary
    </button>
  </div>
</div>`,
    html: `<div>
  <div class="button-layout">
    <button
      type="button"
      class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-green-600 bg-green-100 hover:bg-green-100 focus:outline-none"
    >
      outline
    </button>
    <button
      type="button"
      class="inline-flex items-center px-3 py-2 border text-sm leading-4 font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 focus:outline-none"
    >
      default
    </button>
    <button
      type="button"
      class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none"
    >
      success
    </button>
    <button
      type="button"
      class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none"
    >
      danger
    </button>
    <button
      type="button"
      class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none"
    >
      alert
    </button>
    <button
      type="button"
      class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none"
    >
      warning
    </button>
     <button
      type="button"
      class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-primary hover:bg-pink-700 focus:outline-none"
    >
      primary
    </button>
  </div>
</div>`,
}

export const buttonDataIconVariants = {
    jsx: `() => {
  const Icon = ({ className }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    );
  };

  return (<div className="button-layout">
  <button
    type="button"
    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-pink-700 focus:outline-none"
  >
    <Icon className="h-6 w-6 mr-2" /> btn icon left
  </button>

  <button
    type="button"
    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-pink-700 focus:outline-none"
  >
    btn icon right <Icon className="h-6 w-6 ml-2" />
  </button>
  <button
    type="button"
    className="inline-flex items-center px-3 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-pink-700 focus:outline-none"
  >
    <Icon className="h-6 w-6" />
  </button>
  <button
    type="button"
    className="inline-flex items-center px-3 py-3 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-primary hover:bg-pink-700 focus:outline-none"
  >
    <Icon className="h-6 w-6" />
  </button>
  <button
    type="button"
    className="inline-flex items-center px-3 py-3 text-sm font-medium rounded-md shadow-none text-gray-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-600 focus:ring-opacity-10"
  >
    <Icon className="h-6 w-6" />
  </button>
</div>);
};
`,
    html: `<div className="button-layout">
  <button
    type="button"
    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-pink-700 focus:outline-none"
  >
     <img src="/taka.svg" class="h-6 w-6 mr-2" /> btn icon left
  </button>

  <button
    type="button"
    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-pink-700 focus:outline-none"
  >
    btn icon right  <img src="/taka.svg" class="h-6 w-6 ml-2" />
  </button>
  <button
    type="button"
    className="inline-flex items-center px-3 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-pink-700 focus:outline-none"
  >
     <img src="/taka.svg" class="h-6 w-6" />
  </button>
  <button
    type="button"
    className="inline-flex items-center px-3 py-3 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-primary hover:bg-pink-700 focus:outline-none"
  >
    <img src="/taka.svg" class="h-6 w-6" />
  </button>
  <button
    type="button"
    className="inline-flex items-center px-3 py-3 text-sm font-medium rounded-md shadow-none text-gray-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-600 focus:ring-opacity-10"
  >
    <img src="/taka.svg" class="h-6 w-6" />
  </button>
</div>`
}

export const iconPackReactSample = `import { BeakerIcon } from '@heroicons/react/solid'

function MyComponent() {
  return (
    <div>
      <BeakerIcon className="h-5 w-5 text-blue-500"/>
      <p>...</p>
    </div>
  )
}`

export const iconPackSvgSample = `<svg class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  />
</svg>`;