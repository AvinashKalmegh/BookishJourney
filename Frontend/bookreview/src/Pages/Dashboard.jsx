import React from 'react';
// import { Box, Text } from '@chakra-ui/react';
// import { reviewsData } from './Dashboarddata';
// import { Bar } from 'react-chartjs-2'; // Import Bar from react-chartjs-2



const Dashboard = () => {
  //  // ... your existing code ...
  //  const reviewsPerDay = reviewsData.reduce((acc, review) => {
  //   const date = review.date;
  //   acc[date] = (acc[date] || 0) + 1;
  //   return acc;
  // }, {});

  // // Calculate the average rating
  // const totalRatings = reviewsData.reduce((acc, review) => acc + review.rating, 0);
  // const averageRating = (totalRatings / reviewsData.length).toFixed(2);

  // // Create data for the chart
  // const chartData = {
  //   labels: Object.keys(reviewsPerDay),
  //   datasets: [
  //     {
  //       label: 'Reviews Added Per Day',
  //       data: Object.values(reviewsPerDay),
  //       backgroundColor: 'rgba(75, 192, 192, 0.2)', // Customize the chart's appearance
  //       borderColor: 'rgba(75, 192, 192, 1)', // Customize the chart's appearance
  //       borderWidth: 1, // Customize the chart's appearance
  //     },
  //   ],
  // };

  // // Define options for the chart (customize as needed)
  // const chartOptions = {
  //   scales: {
  //     y: {
  //       type: 'linear',
  //       beginAtZero: true,
  //     },
  //   },
  // };

  // return (
  //   <Box p={4}>
  //     <Text fontSize="xl" fontWeight="bold" mb={4}>
  //       Dashboard
  //     </Text>
  //     <Box bg="white" p={4} boxShadow="md" borderRadius="md">
  //       <Text fontSize="lg" fontWeight="bold" mb={2}>
  //         Reviews Added Per Day:
  //       </Text>
  //       <Bar data={chartData} options={chartOptions} /> {/* Render the Bar chart */}
  //     </Box>
  //     {/* ... rest of your code ... */}
  //   </Box>
  // );
}

export default Dashboard;