'use client';

export default function Home () {
  return (
    <main className='max-w-screen-xl mx-auto'>
      <button
        type='button'
        aria-label='Toggle Theme'
        className='inline-flex items-center justify-center h-10 px-4 font-medium bg-green-300 rounded-md hover:bg-green-400 focus-visible:ring-green-400 dark:bg-green-800 dark:hover:bg-green-900 text-neutral-900 dark:text-neutral-50'
      >
        Toggle theme
      </button>
      <h1 className='text-green-800 dark:text-red-600'>Diego Joseph Añazco Bolívar</h1>
    </main>
  );
}
