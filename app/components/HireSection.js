"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const HireSection = () => {
    const router = useRouter();
    const handleApi = (value) => {
        router.push(`/jobs/${value}`);
    }
    return (
        <div class="flex flex-wrap justify-center gap-8  py-10">
            <div class="max-w-[18rem] p-6  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition duration-300 bg-blurs">
                <a >
                    <h5 class="mb-2 text-xl font-bold text-gray-200 dark:text-white">ReactJs Developer</h5>
                </a>
                <p class="mb-3 text-gray-100 text-xs">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <button onClick={() => handleApi(5)} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Apply
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
            <div class="max-w-[18rem] p-6  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition duration-300 bg-blurs">
                <a >
                    <h5 class="mb-2 text-xl font-bold text-gray-200 dark:text-white">ReactJs Developer</h5>
                </a>
                <p class="mb-3 text-gray-100 text-xs">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <button onClick={() => handleApi(6)} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Apply
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
            <div class="max-w-[18rem] p-6  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition duration-300 bg-blurs">
                <a >
                    <h5 class="mb-2 text-xl font-bold text-gray-200 dark:text-white">ReactJs Developer</h5>
                </a>
                <p class="mb-3 text-gray-100 text-xs">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <button onClick={() => handleApi(9)} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Apply
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
            <div class="max-w-[18rem] p-6  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition duration-300 bg-blurs">
                <a >
                    <h5 class="mb-2 text-xl font-bold text-gray-200 dark:text-white">ReactJs Developer</h5>
                </a>
                <p class="mb-3 text-gray-100 text-xs">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <button onClick={() => handleApi(10)} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Apply
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
            <div class="max-w-[18rem] p-6  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition duration-300 bg-blurs">
                <a >
                    <h5 class="mb-2 text-xl font-bold text-gray-200 dark:text-white">ReactJs Developer</h5>
                </a>
                <p class="mb-3 text-gray-100 text-xs">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <button onClick={() => handleApi(16)} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Apply
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>

        </div>
    )
}

export default HireSection