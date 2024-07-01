import axios from 'axios';

export const fetchFECData = async () => {
  try {
    const response = await axios.get('https://api.open.fec.gov/v1/candidates/totals/', {
      params: {
        api_key: 'oBrDuKxBZuDM1ZqeRjs6zycEJTpjwOzpr8Ruj84C',
        election_year: 2024, // Update this based on the desired period
        per_page: 10 // Adjust the number of results per page if needed
      }
    });
    console.log('FEC Data Response:', response.data); // Log response data for debugging
    return response.data.results;
  } catch (error) {
    console.error('Error fetching FEC data:', error);
    return [];
  }
};

export const fetchRepresentativeData = async (address) => {
  try {
    const response = await axios.get('https://www.googleapis.com/civicinfo/v2/representatives', {
      params: {
        key: 'AIzaSyCOavtZokUE3oy8d74XzKo5kVXHQHRCbIg',
        address: address
      }
    });
    console.log('Representative Data Response:', response.data); // Log response data for debugging
    return response.data.officials;
  } catch (error) {
    console.error('Error fetching representative data:', error);
    return [];
  }
};
