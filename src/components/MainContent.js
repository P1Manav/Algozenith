import React, { useState } from 'react';

function MainContent() {
  const [activeTab, setActiveTab] = useState('Learning Material');
  const tabs = ['Mentor Sessions', 'Learning Material'];

  return (
    <div style={{ flex: 1, padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '10px 15px', cursor: 'pointer', fontWeight: activeTab === tab ? 'bold' : 'normal',
                borderBottom: activeTab === tab ? '3px solid #007bff' : '3px solid transparent'
              }}
            >
              {tab}
            </div>
          ))}
        </div>
        <button style={{ padding: '8px 12px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', border: 'none' }}>How it works</button>
      </div>

      <div style={{ display: 'flex' }}>
        {/* Chapters */}
        <div style={{ width: '200px', marginRight: '20px' }}>
          {['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5'].map((chapter) => (
            <div key={chapter} style={{
              padding: '15px', cursor: 'pointer', backgroundColor: '#e6eefc', marginBottom: '10px', borderRadius: '8px'
            }}>
              {chapter}
            </div>
          ))}
        </div>

        {/* Content */}
        <div style={{ flex: 1, padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <Part title="Lorem Ipsum Dolor Sit Amet" time="02:00:00" difficulty="Medium" tasks={5} completion="45" />
          <Part title="Lorem Ipsum Dolor Sit Amet" time="02:00:00" difficulty="Medium" tasks={12} completion="20" />
          <Part title="Lorem Ipsum Dolor Sit Amet" time="02:00:00" difficulty="Medium" tasks={12} completion="0" />
        </div>
      </div>
    </div>
  );
}

function Part({ title, time, difficulty, tasks, completion }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>{title}</h3>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <span>{time}</span> | <span>{difficulty}</span> | <span>{tasks} Tasks</span>
        <div style={{ flex: 1, textAlign: 'right', color: '#007bff' }}>{completion}% Completed</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {['Video 1', 'Article 1', 'Quiz 1', 'Coding Exercise 1', 'Combined Resource 1'].map((task, index) => (
          <div key={index} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f0f4f8', borderRadius: '5px'
          }}>
            <span>{task}</span>
            <span>10:00</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainContent;
