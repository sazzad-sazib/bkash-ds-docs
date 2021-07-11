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
\t<p className="font-sans font-black text-6xl text-gray-700 my-6">h1 - bKash</p>
\t<p className="font-sans font-extrabold text-5xl text-gray-700 my-5">h2 - bKash</p>
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
\t<p class="font-sans font-black text-6xl text-gray-700 my-6">h1 - bKash</p>
\t<p class="font-sans font-extrabold text-5xl text-gray-700 my-5">h2 - bKash</p>
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
    @apply font-sans font-black text-6xl text-gray-700 my-6
  }
  h2 {
    @apply font-sans font-extrabold text-5xl text-gray-700 my-5
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
  p,div {
    @apply text-gray-700
  }
}`

export const tailwindFontColorImport = `theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#d82a77',
          100: '#FBE4E4',
          300: '#FAA6C4',
          400: '#F56EA1',
          500: '#d82a77',
          700: '#C21663',
        },
        green: {
          DEFAULT: '#22C55E',
          100: '#DCFCE7',
          500: '#22C55E',
          700: '#15803D',
        }
      },
    },
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
    jsx: `<div className="layout">
  <button
    type="button"
    className="btn btn-primary btn-small"
  >
    Small
  </button>
  <button
    type="button"
    className="btn btn-primary btn-pagination"
  >
    pagination
  </button>
  <button
    type="button"
    className="btn btn-primary btn-regular"
  >
    regular
  </button>
  <button
    type="button"
    className="btn btn-primary btn-large"
  >
    large
  </button>
  <button
    type="button"
    className="btn btn-primary btn-larger"
  >
    extra large
  </button>
</div>`,
    html: `<div class="layout">
  <button
    type="button"
    class="btn btn-primary btn-small"
  >
    Small
  </button>
  <button
    type="button"
    class="btn btn-primary btn-pagination"
  >
    pagination
  </button>
  <button
    type="button"
    className="btn btn-primary btn-regular"
  >
    regular
  </button>
  <button
    type="button"
    class="btn btn-primary btn-large"
  >
    large
  </button>
  <button
    type="button"
    class="btn btn-primary btn-larger"
  >
    extra large
  </button>
</div>`
}

export const buttonDataVariant = {
    jsx: `<div className="layout">
    <button
      type="button"
      className="btn btn-regular btn-outline"
    >
      outline
    </button>
    <button
      type="button"
      className="btn btn-regular btn-default"
    >
      default
    </button>
    <button
      type="button"
      className="btn btn-regular btn-success"
    >
      success
    </button>
    <button
      type="button"
      className="btn btn-regular btn-danger"
    >
      danger
    </button>
    <button
      type="button"
      className="btn btn-regular btn-warning"
    >
      warning
    </button>
    <button
      type="button"
      className="btn btn-regular btn-primary"
    >
      primary
    </button>
    <button
      type="button"
      className="btn btn-regular btn-link"
    >
      link
    </button>
  </div>`,
    html: `<div class="layout">
    <button
      type="button"
      class="btn btn-regular btn-outline"
    >
      outline
    </button>
    <button
      type="button"
      class="btn btn-regular btn-default"
    >
      default
    </button>
    <button
      type="button"
      class="btn btn-regular btn-success"
    >
      success
    </button>
    <button
      type="button"
      class="btn btn-regular btn-danger"
    >
      danger
    </button>
    <button
      type="button"
      class="btn btn-regular btn-warning"
    >
      warning
    </button>
    <button
      type="button"
      class="btn btn-regular btn-primary"
    >
      primary
    </button>
    <button
      type="button"
      class="btn btn-regular btn-link"
    >
      link
    </button>
  </div>`
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

  return (<div className="layout">
  <button
    type="button"
    className="btn btn-regular btn-primary btn-disabled"
  >
    <Icon className="btn-icon-regular btn-icon-left" /> btn icon left
  </button>

  <button
    type="button"
    className="btn btn-regular btn-primary"
  >
    btn icon right <Icon className="btn-icon-regular btn-icon-right" />
  </button>
  <button
    type="button"
    className="btn btn-regular btn-primary"
  >
    <Icon className="btn-icon-larger" />
  </button>
  <button
    type="button"
    className="btn btn-regular btn-primary btn-rounded"
  >
    <Icon className="btn-icon-larger" />
  </button>
  <button
    type="button"
    className="btn btn-regular btn-link"
  >
    <Icon className="btn-icon-large" />
  </button>
</div>)
}`,
    html: `<div className="layout">
  <button type="button" className="btn btn-regular btn-primary btn-disabled">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="btn-icon-regular btn-icon-left"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#fff"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span>btn icon left</span>
  </button>

  <button type="button" className="btn btn-regular btn-primary">
    <span>btn icon right</span>{" "}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="btn-icon-regular btn-icon-right"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#fff"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </button>
  <button type="button" className="btn btn-primary btn-regular">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="btn-icon-regular"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#fff"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </button>
  <button type="button" className="btn btn-primary btn-regular btn-rounded">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="btn-icon-regular"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#fff"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </button>
  <button type="button" className="btn btn-link btn-regular">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="btn-icon-regular"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#d82a77"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
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


export const avatarSizesData = {
    jsx: `<div className="layout">
  <div
    className="relative rounded-full inline-block w-6 h-6"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      className="object-cover w-full h-full rounded-full"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      className="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>

  <div
    className="relative rounded-full inline-block w-8 h-8"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      className="object-cover w-full h-full rounded-full"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      className="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>

  <div
    className="relative rounded-full inline-block w-10 h-10"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      className="object-cover w-full h-full rounded-full"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      className="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>
</div>`,
    html: `<div class="layout">
  <div
    class="relative rounded-full inline-block w-6 h-6"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      class="object-cover w-full h-full rounded-full"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      class="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>

  <div
    class="relative rounded-full inline-block w-8 h-8"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      class="object-cover w-full h-full rounded-full"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      class="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>

  <div
    class="relative rounded-full inline-block w-10 h-10"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      class="object-cover w-full h-full rounded-full"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      class="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>
</div>`,
}

export const avatarSizesWithStatusData = {
    jsx: `<div className="layout">
  <div
    className="relative rounded-full inline-block w-6 h-6"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      className="object-cover w-full h-full rounded-full"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      className="absolute bottom-0 right-0 rounded-md bg-green-500 w-1.5 h-1.5"
    />
    <div
      className="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>

  <div
    className="relative rounded-full inline-block w-8 h-8"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      className="object-cover w-full h-full rounded-full"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      className="absolute bottom-0 right-0 rounded-md bg-green-500 w-2 h-2"
    />
    <div
      className="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>

  <div
    className="relative rounded-full inline-block w-10 h-10"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      className="object-cover w-full h-full rounded-full"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      className="absolute bottom-0 right-0 rounded-md bg-green-500 w-3 h-3"
    />
    <div
      className="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>
</div>`,
    html: `<div class="layout">
  <div
    class="relative rounded-full inline-block w-6 h-6"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      class="object-cover w-full h-full rounded-full"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      class="absolute bottom-0 right-0 rounded-md bg-green-500 w-1.5 h-1.5"
    />
    <div
      class="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>

  <div
    class="relative rounded-full inline-block w-8 h-8"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      class="object-cover w-full h-full rounded-full"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      class="absolute bottom-0 right-0 rounded-md bg-green-500 w-2 h-2"
    />
    <div
      class="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>

  <div
    class="relative rounded-full inline-block w-10 h-10"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      class="object-cover w-full h-full rounded-full"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      class="absolute bottom-0 right-0 rounded-md bg-green-500 w-3 h-3"
    />
    <div
      class="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>
</div>`
};

export const avatarStatusVariantData = {
    jsx: `<div className="layout">
  <div
    className="relative rounded-full inline-block w-10 h-10"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      className="object-cover w-full h-full rounded-full"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      className="absolute bottom-0 right-0 rounded-md bg-green-500 w-3 h-3"
    />
    <div
      className="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>
  <div
    className="relative rounded-full inline-block w-10 h-10"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      className="object-cover w-full h-full rounded-full"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      className="absolute bottom-0 right-0 rounded-md bg-yellow-500 w-3 h-3"
    />
    <div
      className="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>

  <div
    className="relative rounded-full inline-block w-10 h-10"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      className="object-cover w-full h-full rounded-full"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      className="absolute bottom-0 right-0 rounded-md bg-red-500 w-3 h-3"
    />
    <div
      className="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>

  <div
    className="relative rounded-full inline-block w-10 h-10"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      className="object-cover w-full h-full rounded-full"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      className="absolute bottom-0 right-0 rounded-md bg-gray-500 w-3 h-3"
    />
    <div
      className="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>
</div>`,
    html: `<div class="layout">
  <div
    class="relative rounded-full inline-block w-10 h-10"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      class="object-cover w-full h-full rounded-full"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      class="absolute bottom-0 right-0 rounded-md bg-green-500 w-3 h-3"
    />
    <div
      class="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>
  <div
    class="relative rounded-full inline-block w-10 h-10"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      class="object-cover w-full h-full rounded-full"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      class="absolute bottom-0 right-0 rounded-md bg-yellow-500 w-3 h-3"
    />
    <div
      class="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>

  <div
    class="relative rounded-full inline-block w-10 h-10"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      class="object-cover w-full h-full rounded-full"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      class="absolute bottom-0 right-0 rounded-md bg-red-500 w-3 h-3"
    />
    <div
      class="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>

  <div
    class="relative rounded-full inline-block w-10 h-10"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      class="object-cover w-full h-full rounded-full"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      class="absolute bottom-0 right-0 rounded-md bg-gray-500 w-3 h-3"
    />
    <div
      class="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>
</div>`
}

export const avatarInitialWithStatus = {
    jsx: `<div className="layout">
  <div
    className="relative rounded-full inline-block w-8 h-8"
    role="img"
    aria-label="Avatar of John Doe "
  >
    <div
      data-testid="initialNode"
      className="flex items-center justify-center w-full h-full rounded-full bg-gray-200 text-sm"
    >
      JD
    </div>
    <div
      className="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    ></div>
  </div>
  <div
    className="relative rounded-full inline-block w-8 h-8"
    role="img"
    aria-label="Avatar of John Doe "
  >
    <div
      data-testid="initialNode"
      className="flex items-center justify-center w-full h-full rounded-full bg-pink-200 text-primary text-sm"
    >
      JD
    </div>
    <div
      className="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    ></div>
  </div>
</div>`,
    html: `<div class="layout">
  <div
    class="relative rounded-full inline-block w-8 h-8"
    role="img"
    aria-label="Avatar of John Doe "
  >
    <div
      data-testid="initialNode"
      class="flex items-center justify-center w-full h-full rounded-full bg-gray-200 text-sm"
    >
      JD
    </div>
    <div
      class="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    ></div>
  </div>
  <div
    class="relative rounded-full inline-block w-8 h-8"
    role="img"
    aria-label="Avatar of John Doe "
  >
    <div
      data-testid="initialNode"
      class="flex items-center justify-center w-full h-full rounded-full bg-pink-200 text-primary text-sm"
    >
      JD
    </div>
    <div
      class="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    ></div>
  </div>
</div>`,
}

export const badgeData = {
    jsx: `<div className="layout">
  <span className="badge badge-neutral">
    Neutral
  </span>
  <span className="badge badge-primary">
    Primary
  </span>
  <span className="badge badge-success">
    Success
  </span>
  <span className="badge badge-warning">
    Warning
  </span>
  <span className="badge badge-danger">
    Danger
  </span>
</div>`,
    html: `<div class="layout">
  <span class="badge badge-neutral">
    Neutral
  </span>
  <span class="badge badge-primary">
    Primary
  </span>
  <span class="badge badge-success">
    Success
  </span>
  <span class="badge badge-warning">
    Warning
  </span>
  <span class="badge badge-danger">
    Danger
  </span>
</div>`
}

export const badgeLayerSnippet = `//badge
@layer base {
  .badge{
    @apply inline-flex px-3 py-0.5 text-xs font-medium leading-5 rounded-full
  }
  .badge-neutral {
    @apply text-gray-700 bg-gray-100 dark:text-gray-100 dark:bg-gray-700
  }
  .badge-primary {
    @apply text-white bg-primary
  }
  .badge-success {
    @apply  text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100
  }
  .badge-danger {
    @apply  text-red-700 bg-red-100 dark:bg-red-700 dark:text-red-100
  }
  .badge-warning {
    @apply  text-yellow-700 bg-yellow-100 dark:bg-yellow-700 dark:text-yellow-100
  }
}`

export const buttonLayerSnippet = `//button
@layer base {
  .btn {
    @apply align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none
  }
  .btn-block {
    @apply w-full
  }
  .btn-larger {
    @apply px-10 py-4 rounded-lg
  }
  .btn-large {
    @apply px-5 py-3 rounded-lg
  }
  .btn-regular {
    @apply px-4 py-2 rounded-md text-sm
  }
  .btn-small, .btn-pagination {
    @apply px-3 py-1 rounded text-xs
  }
  .btn-icon-larger, .btn-icon-large, .btn-icon-regular{
    @apply h-5 w-5
  }
  .btn-icon-small {
    @apply h-3 w-3
  }
  .btn-icon-left {
    @apply mr-2 -ml-1
  }
  .btn-icon-right {
    @apply ml-2 -mr-1
  }
  .btn-primary {
    @apply text-white bg-primary border border-primary active:bg-primary hover:bg-primary-700 focus:ring focus:ring-opacity-40 focus:ring-primary-300
  }
  .btn-outline {
    @apply text-primary border-primary bg-transparent border focus:outline-none active:bg-transparent hover:border-primary-700 hover:bg-transparent focus:ring focus:ring-opacity-40 focus:ring-primary-300
  }
  .btn-default {
    @apply text-gray-700 border-gray-500 bg-transparent border focus:outline-none active:bg-transparent hover:border-gray-700 hover:bg-transparent focus:ring focus:ring-opacity-40 focus:ring-gray-300
  }
  .btn-success {
    @apply text-white bg-green-500 border border-green-500 active:bg-green-700 hover:bg-green-700 focus:ring focus:ring-opacity-40 focus:ring-green-300
  }
  .btn-danger {
    @apply text-white bg-red-500 border border-red-500 active:bg-red-700 hover:bg-red-700 focus:ring focus:ring-opacity-40 focus:ring-red-300
  }
  .btn-warning {
    @apply text-white bg-yellow-500 border border-yellow-500 active:bg-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-opacity-40 focus:ring-yellow-300
  }
  .btn-link {
    @apply text-primary border-none focus:outline-none active:bg-transparent hover:bg-transparent focus:ring focus:ring-opacity-40 focus:ring-primary-300
  }
  .btn-rounded {
    @apply rounded-full
  }
  .btn-disabled {
    @apply opacity-50 cursor-not-allowed
  }
}`