import React, { useState } from 'react';
import { FiClock, FiTrendingUp, FiClipboard, FiChevronDown, FiVideo, FiFileText, FiCheck, FiCode, FiLink, FiBell, FiUser, FiBriefcase, FiCalendar, FiInfo } from 'react-icons/fi';

function MainContent() {
  const [activeTab, setActiveTab] = useState('Learning Material');
  const [activeChapter, setActiveChapter] = useState(1); // Track the selected chapter

  return (
    <div style={styles.pageContainer}>
      <div style={styles.iconsContainer}>
        <FiBell style={styles.icon} />
        <FiUser style={styles.icon} />
      </div>
      <div style={styles.container}>
        <div style={styles.chapterSidebar}>
          <h3>Chapters</h3>
          {['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5'].map((chapter, index) => (
            <div
              key={index}
              style={{
                ...styles.chapterItem,
                ...(activeChapter === index + 1 ? styles.activeChapter : {}),
              }}
              onClick={() => setActiveChapter(index + 1)}
            >
              {chapter}
              <span style={styles.chapterTime}>05:00:00</span>
            </div>
          ))}
        </div>
        <div style={styles.mainContent}>
          <div style={styles.tabContainer}>
            <button
              onClick={() => setActiveTab('Mentor Sessions')}
              style={{
                ...styles.tabButton,
                ...(activeTab === 'Mentor Sessions' ? styles.activeTab : styles.inactiveTab),
              }}
            >
              <FiCalendar style={styles.tabIcon} />
              Mentor Sessions
            </button>
            <button
              onClick={() => setActiveTab('Learning Material')}
              style={{
                ...styles.tabButton,
                ...(activeTab === 'Learning Material' ? styles.activeTab : styles.inactiveTab),
              }}
            >
              <FiBriefcase style={styles.tabIcon} />
              Learning Material
            </button>
            <button style={styles.infoButton}>
              <FiInfo style={styles.infoIcon} /> How it works
            </button>
          </div>

          {activeTab === 'Mentor Sessions' ? (
            <div style={styles.mentorSessions}>
              <h3>Upcoming Mentor Sessions</h3>
              <div style={styles.sessionCard}>Session 1: Advanced Data Structures - 10:00 AM, Jan 20</div>
              <div style={styles.sessionCard}>Session 2: Dynamic Programming - 02:00 PM, Jan 22</div>
              <div style={styles.sessionCard}>Session 3: Graph Algorithms - 05:00 PM, Jan 24</div>
            </div>
          ) : (
            <div>
              <LearningMaterial />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function LearningMaterial() {
  const parts = [
    { id: 1, title: "Lorem Ipsum Dolor Sit Amet", time: "02:00:00", difficulty: "Medium", tasks: 5, completion: 45 },
    { id: 2, title: "Lorem Ipsum Dolor Sit Amet", time: "02:00:00", difficulty: "Medium", tasks: 12, completion: 20 },
    { id: 3, title: "Lorem Ipsum Dolor Sit Amet", time: "02:00:00", difficulty: "Medium", tasks: 12, completion: 0 }
  ];

  return (
    <div style={styles.learningMaterial}>
      {parts.map((part, index) => (
        <Part
          key={part.id}
          partNumber={index + 1}
          title={part.title}
          time={part.time}
          difficulty={part.difficulty}
          tasks={part.tasks}
          completion={part.completion}
        />
      ))}
    </div>
  );
}

function Part({ partNumber, title, time, difficulty, tasks, completion }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const resources = [
    { icon: <FiVideo />, text: "Video", time: "10 mins" },
    { icon: <FiFileText />, text: "Article", time: "10 mins" },
    { icon: <FiCheck />, text: "Quiz", time: "10 mins" },
    { icon: <FiCode />, text: "Coding Exercise 1", time: "10 mins" },
    { icon: <FiLink />, text: "Combined Resource 1", time: "10 mins" }
  ];

  return (
    <div style={styles.partCard}>
      <div style={styles.partHeader}>
        <div>
          <span style={styles.partTitle}>PART {partNumber}</span>
          <h3 style={styles.partHeading}>{title}</h3>
        </div>
        <div style={styles.partInfo}>
          <div style={styles.infoItem}><FiClock /><span>{time}</span></div>
          <div style={styles.infoItem}><FiTrendingUp /><span>{difficulty}</span></div>
          <div style={styles.infoItem}><FiClipboard /><span>{tasks}</span></div>
          <button onClick={toggleDropdown} style={styles.dropdownButton}>
            <FiChevronDown style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
          </button>
        </div>
      </div>
      {isOpen && (
        <div style={styles.resourcesContainer}>
          {resources.map((resource, index) => (
            <div key={index} style={styles.resourceItem}>
              {resource.icon}
              <span style={styles.resourceText}>{resource.text} - {resource.time}</span>
            </div>
          ))}
        </div>
      )}
      <div style={styles.completionContainer}>
        <span style={styles.completionText}>{completion}% Completed</span>
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${completion}%` }}></div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    position: 'relative',
  },
  iconsContainer: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    display: 'flex',
    gap: '15px',
    zIndex: 1,
  },
  icon: {
    fontSize: '24px',
    cursor: 'pointer',
    color: '#007bff',
  },
  container: {
    display: 'flex',
    marginTop: '60px',
  },
  chapterSidebar: {
    width: '20%',
    padding: '20px',
    borderRight: '1px solid #e0e0e0',
    backgroundColor: '#f8f9fa',
  },
  chapterItem: {
    padding: '10px 0',
    cursor: 'pointer',
  },
  activeChapter: {
    backgroundColor: '#e6f7ff',
    fontWeight: 'bold',
  },
  chapterTime: {
    float: 'right',
    color: '#999',
  },
  mainContent: {
    padding: '20px',
    border: '1px solid #A4E6FF',
    borderRadius: '8px',
    marginLeft: '20px',
    width: '80%',
    backgroundColor: '#f8f9fa',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
  },
  tabContainer: {
    display: 'flex',
    marginBottom: '20px',
  },
  tabButton: {
    flex: 1,
    padding: '10px',
    borderRadius: '4px 4px 0 0',
    cursor: 'pointer',
    border: '1px solid #ddd',
  },
  activeTab: {
    backgroundColor: '#ffffff',
    borderBottom: '2px solid #007bff',
  },
  inactiveTab: {
    backgroundColor: '#f8f9fa',
  },
  infoButton: {
    backgroundColor: '#f8f9fa',
    border: 'none',
    cursor: 'pointer',
  },
  partCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
    backgroundColor: '#fff',
  },
  partHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  partTitle: {
    color: '#007bff',
  },
  partInfo: {
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    color: '#777',
  },
  dropdownButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  resourcesContainer: {
    marginTop: '10px',
  },
  resourceItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '5px 0',
  },
  resourceText: {
    color: '#555',
  },
  completionContainer: {
    marginTop: '10px',
  },
  completionText: {
    fontSize: '12px',
    color: '#666',
  },
  progressBar: {
    height: '8px',
    borderRadius: '4px',
    backgroundColor: '#e0e0e0',
    marginTop: '5px',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#007bff',
    borderRadius: '4px',
  },
};

export default MainContent;
