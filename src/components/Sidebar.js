import React from 'react';
import { FiHome, FiBook, FiMessageCircle, FiTrendingUp, FiBarChart } from 'react-icons/fi';

function Sidebar() {
  return (
    <div style={{ width: '250px', padding: '20px', backgroundColor: '#eef2f6', display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>AlgoZenith</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <SidebarItem icon={<FiHome />} text="Dashboard" />
        <SidebarItem icon={<FiBook />} text="Learn" />
        <SidebarItem icon={<FiMessageCircle />} text="Forums" />
        <SidebarItem icon={<FiTrendingUp />} text="Upskill" active />
        <SidebarItem icon={<FiBarChart />} text="Contest" />
        <SidebarItem icon={<FiBarChart />} text="Leaderboard" />
      </div>
    </div>
  );
}

function SidebarItem({ icon, text, active }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', padding: '10px 15px',
      backgroundColor: active ? '#e6eefc' : 'transparent', borderRadius: '8px',
      fontWeight: active ? 'bold' : 'normal', cursor: 'pointer'
    }}>
      {icon}
      <span style={{ marginLeft: '10px' }}>{text}</span>
    </div>
  );
}

export default Sidebar;
