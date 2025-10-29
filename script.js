//================================================
// 1. YOUR WRITEUP DATABASE
//================================================
// This is where you'll add all your writeups.
// Just copy the object and add a new one.
const allWriteups = [
    {
        href: "Writeups/my-first-writeup.html",
        title: "My First Writeup Title",
        category: "Web Exploitation",
        difficulty: "Easy",
        summary: "A short description of the challenge and what I learned."
    },
    // {
    //   href: "Writeups/my-second-writeup.html",
    //   title: "Another Writeup",
    //   category: "Reverse Engineering",
    //   difficulty: "Medium",
    //   summary: "This was a tricky one!"
    // }
];


//================================================
// 2. THE RENDER FUNCTION
//================================================
// This runs when the page loads
document.addEventListener('DOMContentLoaded', function() {
    
    // Check if we are on the main writeups page
    if (document.getElementById('writeups-grid')) {
        renderWriteupsGrid();
    }
    
    // This will run on all pages to load icons
    feather.replace();
});


/**
 * Renders the simple card grid for the WRITEUPS page.
 * Finds the <div id="writeups-grid"> and fills it.
 */
function renderWriteupsGrid() {
    const container = document.getElementById('writeups-grid');
    if (!container) return; // Failsafe

    // Loop through the data and build an HTML card for each writeup
    container.innerHTML = allWriteups.map(writeup => `
        <a href="../${writeup.href}" class="block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
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
}
