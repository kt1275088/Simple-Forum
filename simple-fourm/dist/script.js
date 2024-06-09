// script.js
document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const topicInput = document.getElementById('topic-input');
    const topic = topicInput.value.trim();

    if (topic !== '') {
        createTopic(topic);
        topicInput.value = '';
    }
});

function createTopic(topic) {
    const topicsContainer = document.getElementById('topics');
    const topicElement = document.createElement('div');
    topicElement.classList.add('topic');
    topicElement.textContent = topic;
    topicsContainer.appendChild(topicElement);
}