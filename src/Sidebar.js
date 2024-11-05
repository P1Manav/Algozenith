// Sidebar.js
import React from 'react';
import { FiHome, FiBook, FiMessageCircle, FiTrendingUp, FiBarChart, FiStar } from 'react-icons/fi';

function Sidebar({ activeItem, onItemClick }) {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.title}>AlgoZenith</h2>
      <div style={styles.menu}>
        <SidebarItem
          icon={<FiHome size={20} />}
          text="Dashboard"
          active={activeItem === 'Dashboard'}
          onClick={() => onItemClick('Dashboard')}
        />
        <SidebarItem
          icon={<FiBook size={20} />}
          text="Learn"
          active={activeItem === 'Learn'}
          onClick={() => onItemClick('Learn')}
        />
        <SidebarItem
          icon={<FiMessageCircle size={20} />}
          text="Forums"
          active={activeItem === 'Forums'}
          onClick={() => onItemClick('Forums')}
        />
        <SidebarItem
          icon={<FiTrendingUp size={20} />}
          text="Upskill"
          active={activeItem === 'Upskill'}
          onClick={() => onItemClick('Upskill')}
        />
        <SidebarItem
          icon={<FiBarChart size={20} />}
          text="Contest"
          active={activeItem === 'Contest'}
          onClick={() => onItemClick('Contest')}
        />
        <SidebarItem
          icon={<FiStar size={20} />}
          text="Leaderboard"
          active={activeItem === 'Leaderboard'}
          onClick={() => onItemClick('Leaderboard')}
        />
      </div>
    </div>
  );
}

function SidebarItem({ icon, text, active, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        ...styles.item,
        backgroundColor: active ? '#e6eefc' : 'transparent',
        fontWeight: active ? 'bold' : 'normal',
      }}
    >
      {icon}
      <span style={styles.itemText}>{text}</span>
    </div>
  );
}

const styles = {
  sidebar: {
    width: '250px',
    padding: '20px',
    backgroundColor: '#eef2f6',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'linear-gradient(to bottom, #eef2f6, #ffffff)',
    borderRight: '1px solid #d3d9e2',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#3b4a6b',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 15px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  itemText: {
    marginLeft: '10px',
    color: '#3b4a6b',
  },
};

export default Sidebar;
