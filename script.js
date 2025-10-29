// Sample writeups data - in a real app this would come from an API
const writeups = [
    {
    href: "Writeups/my-first-writeup.html",
    category: "Web Exploitation",
    difficulty: "Easy",
    title: "My First Writeup Title",
    description: "A short description of the challenge and what I learned."
    },
    {
        id: 2,
        title: "TryHackMe - Another Challenge",
        category: "Reverse Engineering",
        date: "2023-04-22",
        difficulty: "Hard",
        tags: ["Ghidra", "Assembly", "Debugging"],
        summary: "Reverse engineered a custom binary to find the hidden flag."
    },
    {
        id: 3,
        title: "CTF Competition - Crypto Challenge",
        category: "Cryptography",
        date: "2023-03-10",
        difficulty: "Easy",
        tags: ["RSA", "AES", "Python"],
        summary: "Cracked a weak RSA implementation to decrypt the flag."
    }
];

document.addEventListener('DOMContentLoaded', function() {
    renderWriteups();
});

function renderWriteups() {
    // This will find 'writeups-container' on the homepage
// OR 'writeups-grid' on the projects page.
const container = document.getElementById('writeups-container');
    if (!container) return;

    container.innerHTML = writeups.map(writeup => `
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
                    <a href="#" class="inline-flex items-center text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium">
                        Read Writeup
                        <i data-feather="arrow-right" class="ml-2 w-4 h-4"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    feather.replace();
}
