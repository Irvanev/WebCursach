export function getPosts() {
    return JSON.parse(localStorage.getItem('posts')) || [];
}

export function getArchive() {
    return JSON.parse(localStorage.getItem('archive')) || [];
}

export function savePosts(posts) {
    localStorage.setItem('posts', JSON.stringify(posts));
}

export function saveArchive(archive) {
    localStorage.setItem('archive', JSON.stringify(archive));
}