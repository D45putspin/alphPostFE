"use client";

import React from 'react';

const RoadmapBody = () => {
    const events = [
        { date: 'Q2 2024', title: 'Token Launch', description: 'Launch of the official $POST token ' },
        { date: 'Q2 2024', title: 'Social Platform Closed Beta', description: 'Open Social Platform  and Social Helpers beta for $POST holders.' },
        { date: 'Q3 2024', title: 'Task Marketplace Closed Beta', description: 'Open Task Based Marketplace beta for $POST holders' },
        { date: 'Q4 2024', title: 'Rollout Web App', description: 'App Rollout to public' },
        { date: 'Q4 2024', title: 'Start development of Mobile App', description: 'Start the development of ALPHPOST mobile APP for Android and IOS' },
        { date: 'Q1 2025', title: 'Team Expansion', description: '' },
        { date: 'Q1 2025', title: 'Rollout Mobile App', description: '' },
        { date: 'Q1 2025', title: 'Agressive Marketing // listings ', description: 'Once all the base of the product is done we aim to launch an agressive marketing campaign and start the exchanges listing' },
        { date: '2025', title: 'New Features Introduction', description: 'We have had a bunch of ideas for the app, and want to include them in future, ex: chatBot' },
        { date: '2025-...', title: 'TBA', description: '' },
    ];

    const styles = {
        timeline: {
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            margin: '20px',
            paddingLeft: '40px',
        },
        timelineBefore: {
            content: '""',
            position: 'absolute',
            left: '20px',
            top: '0',
            bottom: '0',
            width: '6px',
            background: 'linear-gradient(180deg, #fff, #111)',
            borderRadius: '3px',
        },
        timelineEvent: {
            position: 'relative',
            marginBottom: '40px',
            paddingLeft: '30px',
        },
        timelineEventBefore: {
            content: '""',
            position: 'absolute',
            left: '-30px',
            top: '0',
            width: '25px',
            height: '25px',
            borderRadius: '50%',
            background: 'linear-gradient(145deg, #007bff, #007399)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        },
        timelineDate: {
            fontWeight: 'bold',
            color: '#007bff',
            marginBottom: '10px',
            fontSize: '1.1em',
        },
        timelineContent: {
            background: '#fff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease',
        },
        timelineContentH3: {
            margin: '0 0 10px',
            color: '#333',
        },
        timelineContentP: {
            margin: '0',
            color: '#666',
        },
        timelineContentHover: {
            transform: 'scale(1.05)',
        },
        responsive: {
            '@media (maxWidth: 768px)': {
                timeline: {
                    paddingLeft: '20px',
                },
                timelineEvent: {
                    paddingLeft: '20px',
                },
                timelineEventBefore: {
                    left: '-30px',
                },
                timelineBefore: {
                    left: '10px',
                },
            },
        },
    };

    return (
        <div style={styles.timeline}>
            <style>
                {`
                    @media (max-width: 768px) {
                        .timeline {
                            padding-left: 20px !important;
                        }
                        .timeline-event {
                            padding-left: 20px !important;
                        }
                        .timeline-event::before {
                            left: -30px !important;
                        }
                        .timeline::before {
                            left: 10px !important;
                        }
                    }
                    .timeline-content:hover {
                        transform: scale(1.05) !important;
                    }
                `}
            </style>
            <div style={styles.timelineBefore}></div>
            {events.map((event, index) => (
                <div key={index} style={styles.timelineEvent}>
                    <div style={styles.timelineEventBefore}></div>
                    <div style={styles.timelineDate}>{event.date}</div>
                    <div style={styles.timelineContent} className="timeline-content">
                        <h3 style={styles.timelineContentH3}>{event.title}</h3>
                        <p style={styles.timelineContentP}>{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default RoadmapBody;
