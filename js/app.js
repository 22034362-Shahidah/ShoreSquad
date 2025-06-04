// ShoreSquad Main Application JavaScript

// Event handling and data management
class EventManager {
    constructor() {
        this.events = [];
    }

    addEvent(event) {
        this.events.push(event);
        this.renderEvents();
    }

    renderEvents() {
        const eventsGrid = document.querySelector('.events-grid');
        if (!eventsGrid) return;

        eventsGrid.innerHTML = this.events.map(event => `
            <div class="event-card">
                <h3>${event.title}</h3>
                <p>${event.date}</p>
                <p>${event.location}</p>
                <button onclick="joinEvent('${event.id}')" class="join-button">Join Cleanup</button>
            </div>
        `).join('');
    }
}

// Weather tracking functionality
class WeatherTracker {
    constructor() {
        this.weatherWidget = document.querySelector('.weather-widget');
    }

    async getWeatherData(location) {
        // TODO: Implement weather API integration
        // For now, using placeholder data
        return {
            temperature: '22°C',
            conditions: 'Sunny',
            waveHeight: '0.5m',
            tides: 'Low tide at 14:00'
        };
    }

    async updateWeather(location) {
        const weather = await this.getWeatherData(location);
        if (this.weatherWidget) {
            this.weatherWidget.innerHTML = `
                <h3>Current Beach Conditions</h3>
                <div class="weather-info">
                    <p>Temperature: ${weather.temperature}</p>
                    <p>Conditions: ${weather.conditions}</p>
                    <p>Wave Height: ${weather.waveHeight}</p>
                    <p>Tides: ${weather.tides}</p>
                </div>
            `;
        }
    }
}

// Map functionality
class MapManager {
    constructor() {
        this.mapContainer = document.getElementById('map-container');
    }

    initializeMap() {
        // The map is already initialized via iframe in HTML
        console.log('Map is ready');
    }

    addCleanupLocation(location) {
        // Location updates should be done by updating the iframe src
        console.log('New cleanup location:', location);
    }
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    const eventManager = new EventManager();
    const weatherTracker = new WeatherTracker();
    const mapManager = new MapManager();

    // Initialize components
    mapManager.initializeMap();
    weatherTracker.updateWeather('Default Beach');

    // Add some sample events
    eventManager.addEvent({
        id: '1',
        title: 'Weekend Beach Cleanup',
        date: '2025-06-08',
        location: 'Main Beach'
    });
});

// Global event handlers
window.joinEvent = (eventId) => {
    // TODO: Implement event registration
    console.log(`Joined event: ${eventId}`);
    alert('Thanks for joining! Check your email for details.');
};