
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
    className="avatar-container w-6 h-6"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      className="avatar-img"
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
    className="avatar-container w-8 h-8"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      className="avatar-img"
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
    className="avatar-container w-10 h-10"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      className="avatar-img"
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
    class="avatar-container w-6 h-6"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      class="avatar-img"
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
    class="avatar-container w-8 h-8"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      class="avatar-img"
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
    class="avatar-container w-10 h-10"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      class="avatar-img"
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
    className="avatar-container w-6 h-6"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      className="avatar-img"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      className="avatar-status bg-green-500 w-1.5 h-1.5"
    />
    <div
      className="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>

  <div
    className="avatar-container w-8 h-8"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      className="avatar-img"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      className="avatar-status bg-green-500 w-2 h-2"
    />
    <div
      className="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>

  <div
    className="avatar-container w-10 h-10"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      className="avatar-img"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      className="avatar-status bg-green-500 w-3 h-3"
    />
    <div
      className="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>
</div>`,
    html: `<div class="layout">
  <div
    class="avatar-container w-6 h-6"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      class="avatar-img"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      class="avatar-status bg-green-500 w-1.5 h-1.5"
    />
    <div
      class="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>

  <div
    class="avatar-container w-8 h-8"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      class="avatar-img"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      class="avatar-status bg-green-500 w-2 h-2"
    />
    <div
      class="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>

  <div
    class="avatar-container w-10 h-10"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      class="avatar-img"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      class="avatar-status bg-green-500 w-3 h-3"
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
    className="avatar-container w-10 h-10"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      className="avatar-img"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      className="avatar-status bg-green-500 w-3 h-3"
    />
    <div
      className="avatar-shadow"
      aria-hidden="true"
    />
  </div>
  <div
    className="avatar-container w-10 h-10"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      className="avatar-img"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      className="avatar-status bg-yellow-500 w-3 h-3"
    />
    <div
      className="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>

  <div
    className="avatar-container w-10 h-10"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      className="avatar-img"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      className="avatar-status bg-red-500 w-3 h-3"
    />
    <div
      className="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>

  <div
    className="avatar-container w-10 h-10"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      className="avatar-img"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      className="avatar-status bg-gray-500 w-3 h-3"
    />
    <div
      className="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>
</div>`,
    html: `<div class="layout">
  <div
    class="avatar-container w-10 h-10"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      class="avatar-img"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      class="avatar-status bg-green-500 w-3 h-3"
    />
    <div
      class="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>
  <div
    class="avatar-container w-10 h-10"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      class="avatar-img"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      class="avatar-status bg-yellow-500 w-3 h-3"
    />
    <div
      class="absolute inset-0 rounded-full shadow-inner"
      aria-hidden="true"
    />
  </div>

  <div
    class="avatar-container w-10 h-10"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      class="avatar-img"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      class="avatar-status bg-red-500 w-3 h-3"
    />
    <div
      class="avatar-shadow"
      aria-hidden="true"
    />
  </div>

  <div
    class="avatar-container w-10 h-10"
    role="img"
    aria-label="Avatar of Unknown "
  >
    <img
      class="avatar-img"
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
      alt="Profile image"
      loading="lazy"
    />
    <div
      data-testid="statusNode"
      class="avatar-status bg-gray-500 w-3 h-3"
    />
    <div
      class="avatar-shadow"
      aria-hidden="true"
    />
  </div>
</div>`
}

export const avatarInitialWithStatus = {
    jsx: `<div className="layout">
  <div
    className="avatar-container w-8 h-8"
    role="img"
    aria-label="Avatar of John Doe "
  >
    <div
      data-testid="initialNode"
      className="avatar-initial bg-gray-200"
    >
      JD
    </div>
    <div
      className="avatar-shadow"
      aria-hidden="true"
    ></div>
  </div>
  <div
    className="avatar-container w-8 h-8"
    role="img"
    aria-label="Avatar of John Doe "
  >
    <div
      data-testid="initialNode"
      className="avatar-initial bg-primary-100 text-primary"
    >
      JD
    </div>
    <div
      className="avatar-shadow"
      aria-hidden="true"
    ></div>
  </div>
</div>`,
    html: `<div class="layout">
  <div
    class="avatar-container w-8 h-8"
    role="img"
    aria-label="Avatar of John Doe "
  >
    <div
      data-testid="initialNode"
      class="avatar-initial bg-gray-200"
    >
      JD
    </div>
    <div
      class="avatar-shadow"
      aria-hidden="true"
    ></div>
  </div>
  <div
    class="avatar-container w-8 h-8"
    role="img"
    aria-label="Avatar of John Doe "
  >
    <div
      data-testid="initialNode"
      class="avatar-initial bg-primary-100 text-primary"
    >
      JD
    </div>
    <div
      class="avatar-shadow"
      aria-hidden="true"
    ></div>
  </div>
</div>`,
}

export const avatarLayerSnippet = `@layer base {
  .avatar-container {
    @apply relative rounded-full inline-block;
  }
  .avatar-img {
    @apply object-cover w-full h-full rounded-full;
  }
  .avatar-status {
    @apply absolute bottom-0 right-0 rounded-md;
  }
  .avatar-shadow {
    @apply absolute inset-0 rounded-full shadow-inner;
  }
  .avatar-initial {
    @apply flex items-center justify-center w-full h-full rounded-full text-sm;
  }
}`

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

export const inputVariant = {
    jsx: `<div>
  <div className="layout">
    <label className="input-label">
      <span>Name</span>
      <input className="input input-active" type="text" />
    </label>
    <label className="input-label">
      <span>Password</span>
      <input
        className="input input-active input-disabled"
        type="password"
        value="123456"
        disabled
      />
    </label>
    <label className="relative input-label">
      <span>Search</span>
      <input className="input input-active pl-8" type="search" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 absolute bottom-3 left-2.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </label>
  </div>
  <div className="layout mt-2">
    <label className="input-label">
      <span>email</span>
      <input
        className="input input-active input-valid"
        type="email"
      />
      <span className="helper helper-valid">Email Available</span>
    </label>
    <label className="input-label">
      <span>Password</span>
      <input
        className="input input-active input-invalid"
        type="password"
      />
      <span className="helper helper-invalid">Password too short</span>
    </label>
  </div>
</div>`,
    html: `<div>
  <div class="layout">
    <label class="input-label">
      <span>Name</span>
      <input class="input input-active" type="text" />
    </label>
    <label class="input-label">
      <span>Password</span>
      <input
        class="input input-active input-disabled"
        type="password"
        value="123456"
        disabled
      />
    </label>
    <label class="relative input-label">
      <span>Search</span>
      <input class="input input-active pl-8" type="search" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 absolute bottom-3 left-2.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </label>
  </div>
  <div class="layout mt-2">
    <label class="input-label">
      <span>email</span>
      <input
        class="input input-active input-valid"
        type="email"
      />
      <span class="helper helper-valid">Email Available</span>
    </label>
    <label class="input-label">
      <span>Password</span>
      <input
        class="input input-active input-invalid"
        type="password"
      />
      <span class="helper helper-invalid">Password too short</span>
    </label>
  </div>
</div>`
}

export const inputLayerSnippet = `@layer base {
  .input {
    @apply block w-full text-sm rounded-md focus:outline-none dark:text-gray-300 leading-5 shadow-sm
  }
  .input-active {
    @apply focus:border-primary-400 dark:border-gray-600 focus:ring focus:ring-opacity-40 focus:ring-primary-300 dark:focus:border-gray-600 dark:focus:ring-gray-100 dark:bg-gray-700
  }
  .input-disabled {
    @apply cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800
  }
  .input-valid {
    @apply border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring focus:ring-opacity-40 focus:ring-green-300 dark:focus:ring-green-700
  }
  .input-invalid {
    @apply border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring focus:ring-opacity-40 focus:ring-red-300 dark:focus:ring-red-700
  }
  .input-radio {
    @apply text-primary-700 focus:border-primary-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-offset-0 focus:ring-primary-300 dark:focus:ring-gray-100
  }
  .input-checkbox {
    @apply rounded text-primary-700 focus:border-primary-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-offset-0 focus:ring-primary-300 dark:focus:ring-gray-100
  }
  .helper {
    @apply text-xs
  }
  .helper-valid {
    @apply text-green-600 dark:text-green-400
  }
  .helper-invalid {
    @apply text-red-600 dark:text-red-400
  }
}`

export const inputVariantType = {
    jsx: `<div className="layout">
  <label className="input-label">
    <span>Select Your Gender</span>
    <label className="input-label">
      <input name="radio-group" className="input-radio" type="radio" />
      <span className="ml-2">Male</span>
    </label>
    <label className="input-label">
      <input name="radio-group" className="input-radio" type="radio" />
      <span className="ml-2">Female</span>
    </label>
    <label className="input-label">
      <input name="radio-group" className="input-radio" type="radio" />
      <span className="ml-2">Other</span>
    </label>
  </label>
  <label className="input-label">
    <span>Please Mark one from the list below</span>
    <label className="input-label">
      <input name="checkbox-group" className="input-checkbox" type="checkbox" />
      <span className="ml-2">Male</span>
    </label>
    <label className="input-label">
      <input name="checkbox-group" className="input-checkbox" type="checkbox" />
      <span className="ml-2">Female</span>
    </label>
    <label className="input-label">
      <input name="checkbox-group" className="input-checkbox" type="checkbox" />
      <span className="ml-2">Other</span>
    </label>
  </label>
</div>`,
    html: `<div class="layout">
  <label class="input-label">
    <span>Select Your Gender</span>
    <label class="input-label">
      <input name="radio-group" class="input-radio" type="radio" />
      <span class="ml-2">Male</span>
    </label>
    <label class="input-label">
      <input name="radio-group" class="input-radio" type="radio" />
      <span class="ml-2">Female</span>
    </label>
    <label class="input-label">
      <input name="radio-group" class="input-radio" type="radio" />
      <span class="ml-2">Other</span>
    </label>
  </label>
  <label class="input-label">
    <span>Please Mark one from the list below</span>
    <label class="input-label">
      <input name="checkbox-group" class="input-checkbox" type="checkbox" />
      <span class="ml-2">Male</span>
    </label>
    <label class="input-label">
      <input name="checkbox-group" class="input-checkbox" type="checkbox" />
      <span class="ml-2">Female</span>
    </label>
    <label class="input-label">
      <input name="checkbox-group" class="input-checkbox" type="checkbox" />
      <span class="ml-2">Other</span>
    </label>
  </label>
</div>`
}

export const dropdownSample = {
    jsx: `<div className="relative mb-40 block w-min pl-32">
  <button className="btn btn-primary btn-regular"> Dropdown </button>
  <ul
    className="dropdown-list dropdown-right"
    role="menu"
  >
    <li role="none">
      <a
        className="dropdown-item__link"
        role="menuitem"
        href="/?path=/story/dropdown--default"
      >
        Anchor as an item
      </a>
    </li>
    <li role="none">
      <button
        className="dropdown-item__button"
        role="menuitem"
      >
        Button as an item
      </button>
    </li>
    <li role="none">
      <button
        className="dropdown-item__button justify-between"
        role="menuitem"
      >
        <span>Custom design</span>
        <span className="badge badge-primary">
          13
        </span>
      </button>
    </li>
    <li role="none">
      <button
        aria-disabled="true"
        className="dropdown-item__disabled"
        disabled
        role="menuitem"
      >
        Disabled item
      </button>
    </li>
  </ul>
</div>`,
    html: `<div className="relative mb-40 pr-20">
  <button className="btn btn-primary btn-regular"> Dropdown </button>
  <ul
    className="dropdown-list dropdown-left"
    role="menu"
  >
    <li role="none">
      <a
        className="dropdown-item__link"
        role="menuitem"
        href="/?path=/story/dropdown--default"
      >
        Anchor as an item
      </a>
    </li>
    <li role="none">
      <button
        className="dropdown-item__button"
        role="menuitem"
      >
        Button as an item
      </button>
    </li>
    <li role="none">
      <button
        className="dropdown-item__button justify-between"
        role="menuitem"
      >
        <span>Custom design</span>
        <span className="badge badge-primary">
          13
        </span>
      </button>
    </li>
    <li role="none">
      <button
        aria-disabled="true"
        className="dropdown-item__disabled"
        disabled
        role="menuitem"
      >
        Disabled item
      </button>
    </li>
  </ul>
</div>`
}

export const dropdwonCodeSnippet = `@layer base {
  .dropdown-list {
    @apply absolute w-56 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5
  }
  .dropdown-right {
    @apply right-0 origin-top-right
  }
  .dropdown-left {
    @apply left-0 origin-top-left
  }
  .dropdown-item__link {
    @apply inline-flex no-underline font-normal items-center cursor-pointer w-full px-4 py-2 text-sm text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-900 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-200
  }
  .dropdown-item__button {
    @apply inline-flex items-center cursor-pointer w-full px-4 py-2 text-sm text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-900 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-200
  }
  .dropdown-item__disabled {
    @apply inline-flex items-center cursor-pointer w-full px-4 py-2 text-sm text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-900 opacity-50 cursor-not-allowed
  }
}`

export const alertNeutralExample = {
    jsx: `<div>
  <div className="alert alert-neutral" role="alert">
    <button className="alert-close" aria-label="close">
      <svg
        className="alert-close-icon alert-icon-neutral"
        fill="currentColor"
        viewBox="0 0 20 20"
        role="img"
        aria-hidden="true"
      >
        <path
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
      </svg>
    </button>
    <svg
      className="alert-icon alert-icon-neutral"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    This is a neutral alert.
  </div>
</div>`,
    html: `<div>
  <div
  class="alert alert-neutral"
  role="alert"
>
  <button class="alert-close" aria-label="close">
    <svg
      class="alert-close-icon alert-icon-neutral""
      fill="currentColor"
      viewBox="0 0 20 20"
      role="img"
      aria-hidden="true"
    >
      <path
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
        fillRule="evenodd"
      ></path>
    </svg>
  </button>
  <svg
    class="alert-icon alert-icon-neutral"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  This is a neutral alert.
</div>
</div>`
}
export const alertSuccessExample = {
    jsx: `<div>
  <div className="alert alert-success" role="alert">
    <button className="alert-close" aria-label="close">
      <svg
        className="alert-close-icon alert-icon-success"
        fill="currentColor"
        viewBox="0 0 20 20"
        role="img"
        aria-hidden="true"
      >
        <path
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
      </svg>
    </button>
    <svg
      className="alert-icon alert-icon-success"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
     <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    This is a success alert.
  </div>
</div>`,
    html: `<div>
  <div
  class="alert alert-success"
  role="alert"
>
  <button class="alert-close" aria-label="close">
    <svg
      class="alert-close-icon alert-icon-success"
      fill="currentColor"
      viewBox="0 0 20 20"
      role="img"
      aria-hidden="true"
    >
      <path
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
        fillRule="evenodd"
      ></path>
    </svg>
  </button>
  <svg
    class="alert-icon alert-icon-success"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  This is a success alert.
</div>
</div>`
}

export const alertDangerExample = {
    jsx: `<div>
  <div className="alert alert-danger" role="alert">
    <button className="alert-close" aria-label="close">
      <svg
        className="alert-close-icon alert-icon-danger"
        fill="currentColor"
        viewBox="0 0 20 20"
        role="img"
        aria-hidden="true"
      >
        <path
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
      </svg>
    </button>
    <svg
      className="alert-icon alert-icon-danger"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
     <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    This is a danger alert.
  </div>
</div>`,
    html: `<div>
  <div
  class="alert alert-danger"
  role="alert"
>
  <button class="alert-close" aria-label="close">
    <svg
      class="alert-close-icon alert-icon-danger"
      fill="currentColor"
      viewBox="0 0 20 20"
      role="img"
      aria-hidden="true"
    >
      <path
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
        fillRule="evenodd"
      ></path>
    </svg>
  </button>
  <svg
    class="alert-icon alert-icon-danger"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  This is a danger alert.
</div>
</div>`
}

export const alertWarningExample = {
    jsx: `<div>
  <div className="alert alert-warning" role="alert">
    <button className="alert-close" aria-label="close">
      <svg
        className="alert-close-icon alert-icon-warning"
        fill="currentColor"
        viewBox="0 0 20 20"
        role="img"
        aria-hidden="true"
      >
        <path
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
      </svg>
    </button>
    <svg
      className="alert-icon alert-icon-warning"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
    <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    This is a warning alert.
  </div>
</div>`,
    html: `<div>
  <div
  class="alert alert-warning"
  role="alert"
>
  <button class="alert-close" aria-label="close">
    <svg
      class="alert-close-icon alert-icon-warning"
      fill="currentColor"
      viewBox="0 0 20 20"
      role="img"
      aria-hidden="true"
    >
      <path
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
        fillRule="evenodd"
      ></path>
    </svg>
  </button>
  <svg
    class="alert-icon alert-icon-warning"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  This is a warning alert.
</div>
</div>`
}

export const alertLayerSnippet = `
//alert
@layer base {
  .alert {
    @apply w-full p-4 pl-12 relative rounded-lg leading-5
  }
  .alert-close {
    @apply absolute top-0 right-0 mt-4 mr-4
  }
  .alert-close-icon{
    @apply h-5 w-5
  }
  .alert-icon {
    @apply h-5 w-5 text-gray-400 dark:text-gray-500 absolute left-0 top-0 ml-4 mt-4
  }
  .alert-neutral {
    @apply bg-gray-50 text-gray-800 dark:bg-gray-700 dark:text-gray-300
  }
  .alert-icon-neutral {
    @apply text-gray-400 dark:text-gray-500
  }
  .alert-success {
    @apply bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-300
  }
  .alert-icon-success {
    @apply text-green-400 dark:text-green-500
  }
  .alert-danger {
    @apply bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-300
  }
  .alert-icon-danger {
    @apply text-red-400 dark:text-red-500
  }
  .alert-warning {
    @apply bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-300
  }
  .alert-icon-warning {
    @apply text-yellow-400 dark:text-yellow-500
  }
  .alert-info {
    @apply bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-blue-300
  }
  .alert-icon-info {
    @apply text-blue-400 dark:text-blue-500
  }
}`

export const cardBasic = {
  jsx: `<div>
  <div className="card bg-white p-4 mb-4">
    <p className="text-md font-bold mb-2">Revenue</p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum
      commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at qui
      cum numquam, sed amet ratione! Ratione, nihil dolorum.
    </p>
  </div>
  <div className="card flex bg-white mb-4">
  <img
  className="card-cover"
  src="https://images.unsplash.com/photo-1545593169-527754e9edd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
/>
<div className="ml-2 p-4">
<p className="text-md font-bold mb-2">Revenue</p>
<p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum
  commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at qui
  cum numquam, sed amet ratione! Ratione, nihil dolorum.
</p>
</div>
  </div>
  <div className="card bg-primary p-4">
    <p className="text-md font-bold mb-2 text-white">Revenue</p>
    <p className="text-white">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum
      commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at qui
      cum numquam, sed amet ratione! Ratione, nihil dolorum.
    </p>
  </div>
</div>`,
html: `<div>
<div class="card bg-white p-4 mb-4">
  <p class="text-md font-bold mb-2">Revenue</p>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum
    commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at qui
    cum numquam, sed amet ratione! Ratione, nihil dolorum.
  </p>
</div>
<div class="card flex bg-white mb-4">
<img
class="card-cover"
src="https://images.unsplash.com/photo-1545593169-527754e9edd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
/>
<div class="ml-2 p-4">
<p class="text-md font-bold mb-2">Revenue</p>
<p>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum
commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at qui
cum numquam, sed amet ratione! Ratione, nihil dolorum.
</p>
</div>
</div>
<div class="card bg-primary p-4">
  <p class="text-md font-bold mb-2 text-white">Revenue</p>
  <p class="text-white">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum
    commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at qui
    cum numquam, sed amet ratione! Ratione, nihil dolorum.
  </p>
</div>
</div>`
}

export const cardStat = {
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
    const ArrowUp = ({ className }) => {
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
            strokeWidth={2}
            d="M7 11l5-5m0 0l5 5m-5-5v12"
          />
        </svg>
      );
    };
  
    return (
      <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1 stat-card__container">
          <dt>
            <div className="stat-card__icon">
              <Icon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <p className="stat-card__title">
              Cash In
            </p>
          </dt>
          <dd className="stat-card__info-container">
            <p className="stat-card__info">5000 BDT</p>
            <p
              className={
                "stat-card__icon-info-container text-green-500"
              }
            >
              <ArrowUp
                className="stat-card__icon-info h-5 w-5 text-green-500"
                aria-hidden="true"
              />
              <span className="sr-only"> 'Decreased' by</span>
              10%
            </p>
          </dd>
        </div>
        <div className="col-span-1 stat-card__container">
          <dt>
            <div className="stat-card__icon">
              <Icon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <p className="stat-card__title">
              Send Money
            </p>
          </dt>
          <dd className="stat-card__info-container">
            <p className="stat-card__info">100 BDT</p>
            <p
              className={
                "stat-card__icon-info-container text-red-500"
              }
            >
              <ArrowUp
                className="stat-card__icon-info h-5 w-5 text-red-500"
                aria-hidden="true"
              />
              <span className="sr-only"> 'Decreased' by</span>
              10%
            </p>
          </dd>
        </div>
      </div>
    );
  }`,
  html: `<div className="grid grid-cols-2 gap-4">
  <div className="col-span-1 stat-card__container">
    <dt>
      <div className="stat-card__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <p className="stat-card__title">Cash In</p>
    </dt>
    <dd className="stat-card__info-container">
      <p className="stat-card__info">5000 BDT</p>
      <p className="stat-card__icon-info-container text-green-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stat-card__icon-info h-5 w-5 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 11l5-5m0 0l5 5m-5-5v12"
          />
        </svg>
        <span className="sr-only"> 'Decreased' by</span>
        10%
      </p>
    </dd>
  </div>
  <div className="col-span-1 stat-card__container">
    <dt>
      <div className="stat-card__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <p className="stat-card__title">Send Money</p>
    </dt>
    <dd className="stat-card__info-container">
      <p className="stat-card__info">100 BDT</p>
      <p className="stat-card__icon-info-container text-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stat-card__icon-info h-5 w-5 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 11l5-5m0 0l5 5m-5-5v12"
          />
        </svg>
        <span className="sr-only"> 'Decreased' by</span>
        10%
      </p>
    </dd>
  </div>
</div>`,
}

export const cardLayerSnippet = `@layer base {
  .card {
    @apply shadow-md p-4 rounded-md
  }
  .card-cover {
    @apply object-cover w-1/3 rounded-l-md
  }
  .stat-card__container {
    @apply relative bg-white pt-5 px-4 sm:pt-6 sm:px-6 shadow-md rounded-lg overflow-hidden
  }
  .stat-card__icon {
    @apply absolute bg-primary rounded-md p-3
  }
  .stat-card__title {
    @apply ml-16 text-sm font-medium text-gray-500 truncate
  }
  .stat-card__info-container {
    @apply ml-16 pb-6 flex items-baseline sm:pb-7
  }
  .stat-card__info {
    @apply text-2xl font-semibold text-gray-900
  }
  .stat-card__icon-info-container {
    @apply ml-2 flex items-baseline text-sm font-semibold
  }
  .stat-card__icon-info {
    @apply self-center flex-shrink-0
  }
}
`

export const modalSampleData = {
  jsx: `() => {
    const [isShown, setIsShown] = React.useState(false);
  
    const CloeButton = () => (
      <svg
        class="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 20 20"
        role="img"
        aria-hidden="true"
      >
        <path
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
          fill-rule="evenodd"
        ></path>
      </svg>
    );
  
    return (
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => setIsShown(!isShown)}
          className="btn btn-regular btn-primary"
        >
          Click here
        </button>
        {isShown && (
          <div class="modal__backdrop">
            <div class="modal__container" role="dialog">
              <div data-focus-guard="true" tabindex="1"></div>
              <div data-focus-lock-disabled="false">
                <header class="flex justify-end">
                  <button
                    onClick={() => setIsShown(!isShown)}
                    class="modal__close-button"
                    aria-label="close"
                  >
                    <CloeButton />
                  </button>
                </header>
                <div class="modal__content">
                  <img src="/modal_sample.svg" class="h-44 mb-8 mt-4" />
                  <h1 class="text-2xl text-center">OTP Validation Successful</h1>
                  <p class="text-xl mt-3 mb-6 text-center">
                    Your Bank Account has been linked to your saved Bank list
                  </p>
                  <button class="btn btn-primary btn-large">
                    Go to Saved Bank
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }`,
  html: `
  <div class="modal__container" role="dialog">
      <header class="flex justify-end">
        <button
          class="modal__close-button"
          aria-label="close"
        >
        <svg
        class="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 20 20"
        role="img"
        aria-hidden="true"
      >
        <path
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
          fill-rule="evenodd"
        ></path>
      </svg>
        </button>
      </header>
      <div class="modal__content">
        <img src="/modal_sample.svg" class="h-44 mb-8 mt-4" />
        <h1 class="text-2xl text-center">OTP Validation Successful</h1>
        <p class="text-xl mt-3 mb-6 text-center">
          Your Bank Account has been linked to your saved Bank list
        </p>
        <button class="btn btn-primary btn-large">
          Go to Saved Bank
        </button>
        </div>
  </div>`
}

export const modalLayerData = `@layer base {
  .modal__backdrop {
    @apply fixed inset-0 z-40 h-screen w-screen flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center
  }
  .modal__container {
    @apply w-full px-6 py-4 overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl 
  }
  .modal__close-button {
    @apply inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover:text-gray-700
  }
  .modal__content {
    @apply mb-6 text-sm text-gray-700 dark:text-gray-400 flex flex-col items-center
  }
}`


export const navbarDataJSX = `<header className="nav-container">
<div className="nav-container-layout">
  <Link href="/" passHref>
    <Image
      src={bkashLogo}
      alt="bKash Logo"
      width={98}
      height={45}
    />
  </Link>
  <ul className="nav-list">
    <li>
      <Link href="/dashboard" passHref>
        <span className="nav-link text-primary font-medium">
          <DashboardIcon className="mr-2 text-primary" />
          <span>Dashboard</span>
        </span>
      </Link>
    </li>

    <li>
      <Link href="/send-money" passHref>
        <span className="nav-link">
          <AddMoney className="mr-2" />
          <span>Send Money</span>
        </span>
      </Link>
    </li>

    <li>
      <Link href="/notification" passHref>
        <span className="nav-link">
          <span className='relative mr-2'>
          <span className="absolute block w-2 h-2 rounded bg-primary -right-0 -top-1" />
          <NotificationIcon />
          </span>
          <span>Notification</span>
        </span>
      </Link>
    </li>

    <li>
      <button className="flex items-center focus:outline-none">
        <span>Alam Haq</span>
        <span className="flex items-center justify-center ml-2 text-lg text-white bg-pink-500 rounded-full w-9 h-9">
          AH
        </span>
      </button>
    </li>
  </ul>
</div>
</header>`

export const navbarDataHTML = `<header class="nav-container">
<div class="nav-container-layout">
  <a rel="noreferrer noopener" href="/" target="_blank">
    <img src={bkashLogo} alt="bKash Logo" width={98} height={45} />
  </a>
  <ul class="nav-list">
    <li>
      <a rel="noreferrer noopener" href="/dashboard" target="_blank">
        <span class="nav-link text-primary font-medium">
          <DashboardIcon class="mr-2 text-primary" />
          <span>Dashboard</span>
        </span>
      </a>
    </li>

    <li>
      <a rel="noreferrer noopener" href="/send-money" target="_blank">
        <span class="nav-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span>Send Money</span>
        </span>
      </a>
    </li>

    <li>
      <a rel="noreferrer noopener" href="/notification" target="_blank">
        <span class="nav-link">
          <span class="relative mr-2">
            <span class="absolute block w-2 h-2 rounded bg-primary -right-0 -top-1" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </span>
          <span>Notification</span>
        </span>
      </a>
    </li>

    <li>
      <button class="flex items-center focus:outline-none">
        <span>Alam Haq</span>
        <span class="flex items-center justify-center ml-2 text-lg text-white bg-pink-500 rounded-full w-9 h-9">
          AH
        </span>
      </button>
    </li>
  </ul>
</div>
</header>`

export const navLayerData = `//navbar
@layer base {
  .nav-container {
    @apply sticky top-0 z-30 h-[70px] mx-auto bg-white shadow w-full
  }
  .nav-container-layout {
    @apply flex items-center justify-between h-full max-w-6xl mx-auto
  }
  .nav-list {
    @apply flex items-center space-x-6
  }
  .nav-link {
    @apply flex items-center cursor-pointer
  }
}`