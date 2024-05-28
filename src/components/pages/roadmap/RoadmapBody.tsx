import React from 'react';
import './RoadmapBody.css';

const RoadmapBody = () => {
    const events = [
        { date: 'Q2 2024', title: 'Token Launch', description: 'Launch of the official $POST token ' },
        { date: 'Q2 2024', title: 'Social Platform Closed Beta', description: 'Open Social Platform  and Social Helpers beta for $POST holders.' },
        { date: 'Q3 2024', title: 'Task Marketplace Closed Beta', description: 'Open Task Based Marketplace beta for $POST holders' },
        { date: 'Q4 2024', title: 'Rollout Web App', description: 'App Rollout to public' },
        { date: 'Q4 2024', title: 'Start development of Mobile App', description: 'Start the development of ALPHPOST mobile APP for Android and IOS' },
        { date: 'Q1 2025', title: 'Team Expansion', description: '' },
        { date: 'Q1 2025', title: 'Rollout Mobile App', description: '' },
        { date: 'Q1 2025', title: 'Agressive Marketing // Listings ', description: 'Once all the base of the product is done we aim to launch an agressive marketing campaign and start the exchanges listing' },
        { date: '2025', title: 'New Features Introduction', description: 'We have had a bunch of ideas for the app, and want to include them in future, ex: chatBot' },
        { date: '2025-...', title: 'TBA', description: '' },
    ];

    return (
        <div className="timeline">
            {events.map((event, index) => (
                <div key={index} className="timeline-event">
                    <div className="timeline-event-before"></div>
                    <div className="timeline-date">{event.date}</div>
                    <div className="timeline-content">
                        <h3 className="timeline-content-h3" style={{ color: "black" }}>{event.title}</h3>
                        <p className="timeline-content-p" style={{ color: "black" }}>{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RoadmapBody;