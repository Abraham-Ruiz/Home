//==================================================================
// 1. YOUR DATA
// All writeups now have the same structure.
// I've added a real date and 'tags' to your first writeup.
//==================================================================
const allWriteups = [
    {
        href: "Writeups/my-first-writeup.html",
        title: "My First Writeup Title",
        category: "Web Exploitation",
        date: "2025-10-29", // Added today's date
        difficulty: "Easy",
        tags: ["PicoCTF", "SQLi"], // Added tags (can be an empty array: [])
        summary: "A short description of the challenge and what I learned." // Changed 'description' to 'summary'
    },
    {
        href: "#", // Add a link for this one
        title: "TryHackMe - Another Challenge",
        category: "Reverse Engineering",
        date: "2023-04-22",
        difficulty: "Hard",
        tags: ["Ghidra", "Assembly", "Debugging"],
        summary: "Reverse engineered a custom binary to find the hidden flag."
    },
    {
        href: "#", // Add a link for this one
        title: "CTF Competition - Crypto Challenge",
        category: "Cryptography",
        date: "2023-03-10",
        difficulty: "Easy",
        tags: ["RSA", "AES", "Python"],
        summary: "Cracked a weak RSA implementation to decrypt the flag."
    }
];

//==================================================================
// 2. YOUR "BRAIN"
// This runs when the page loads. It checks WHICH page
// you are on and calls the CORRECT function.
//==================================================================
document.addEventListener('DOMContentLoaded', function() {
    // Check if we are on the homepage
    if (document.getElementById('writeups-container')) {
        renderRecentWriteups();
    }
    
    // Check if we are on the main writeups page
    if (document.getElementById('writeups-grid')) {
        renderWriteupsGrid();
    }
    
    // This will run on all pages
    feather.replace();
});

//==================================================================
// 3. YOUR RENDER FUNCTIONS
// Each function targets a different <div> and uses a
// different card style.
//==================================================================

/**
 * Renders the complex list for the HOMEPAGE.
 * Targets: <div id="writeups-container">
 */
function renderRecentWriteups() {
    const container = document.getElementById('writeups-container');
    if (!container) return; // Failsafe

    // We'll just show the 3 most recent (the whole array for now)
    container.innerHTML = allWriteups.map(writeup => `
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden fade-in">
            <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-bold text-gray-800 dark:text-white">${writeup.title}</h3>
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                        ${writeup.difficulty}
                    </span>
                </div>
                
                <div class="flex flex-wrap gap-2 mb-4">
                    <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                        ${writeup.category}
                    </span>
                    ${writeup.tags.map(tag => `
                        <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                            ${tag}
                        </span>
                    `).join('')}
                </div>
                
                <p class="text-gray-600 dark:text-gray-300 mb-4">${writeup.summary}</p>
                
                <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-500 dark:text-gray-400">${new Date(writeup.date).toLocaleDateString()}</span>
                    
                    <a href="${writeup.href}" class="inline-flex items-center text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium">
                        Read Writeup
                        <i data-feather="arrow-right" class="ml-2 w-4 h-4"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    feather.replace(); // Must run feather *after* adding new icons
}


/**
 * Renders the simple card grid for the WRITEUPS page.
 * Targets: <div id="writeups-grid">
 * This is the function you were missing!
 */
function renderWriteupsGrid() {
    const container = document.getElementById('writeups-grid');
    if (!container) return; // Failsafe

    container.innerHTML = allWriteups.map(writeup => `
        <a href="${writeup.href}" class="block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div class="p-6">
                <div class="flex gap-2 mb-2">
                    <span class="inline-block bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        ${writeup.category}
                    </span>
                    <span class="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        ${writeup.difficulty}
                    </span>
                </div>
                
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    ${writeup.title}
                </h3>
                
                <p class="text-gray-700 dark:text-gray-400">
                    ${writeup.summary}
                </p>
            </div>
        </a>
    `).join('');
    
    // Note: No feather.replace() needed here since this card has no icons
}
