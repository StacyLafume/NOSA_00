const fs = require('fs');
const path = require('path');
const grayMatter = require('gray-matter');

const months = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December',
};

const formatDate = (date) => {
  try {
    const dateObject = new Date(date);
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const monthName = months[month];
    const day = String(dateObject.getDate()).padStart(2, '0');
    const year = dateObject.getFullYear();
    const hours = String(dateObject.getHours()).padStart(2, '0');
    const minutes = String(dateObject.getMinutes()).padStart(2, '0');
    const time = `${hours}:${minutes}`;

    return {
      month,
      monthName,
      day,
      year,
      time,
    };
  } catch (error) {
    console.error('Error formatting date:', error);
    return {
      month: '00',
      monthName: 'Unknown',
      day: '00',
      year: '0000',
      time: '00:00',
    };
  }
};

const processArtistOfTheMonthMarkdownFile = (filePath) => {
    try {
        const markdownContent = fs.readFileSync(filePath, 'utf-8');
        const data = grayMatter(markdownContent).data;
    
        const dateString = data.date ? data.date.toString() : new Date().toISOString();
        const parsedDate = formatDate(dateString);
        const exhibitionDate = `${parsedDate.monthName} ${parsedDate.day}, ${parsedDate.year}`;
        const datestring = `${parsedDate.year}-${parsedDate.month}-${parsedDate.day}T${parsedDate.time}:00`;
        const date = new Date(datestring);
        const timestamp = date.getTime() / 1000;

        const artist = {
          id: timestamp,
          artist_name: data.artist_name ? data.artist_name : 'No Artist Name given',
          exhibition_name: data.exhibition_name ? data.exhibition_name : 'No Exhibition Name given',
          exhibition_date: data.exhibition_date ? data.exhibition_date : 'No Exhibition Date given',
          artist_statement: data.artist_statement || 'No artist statement given', // Use default value if data.artist_statement is missing or falsy
          exhibition_statement: data.exhibition_statement || 'No exhibition statement given', // Use default value if data.exhibition_statement is missing or falsy
          headshot: data.headshot || 'No Headshot given', // Use default value if data.headshot is missing or falsy
          exhibition_poster: data.exhibition_poster || 'No main Exhibition Poster given', // Use default value if data.main_artwork is missing or falsy
          exhibition_pieces: data.exhibition_pieces || 'No main Exhibition Pieces given', // Use default value if data.main_artwork is missing or falsy
        };
    
        return artist;
      } catch (error) {
        console.error('Error reading Markdown file:', error);
        return null;
      }
};

const processEventMarkdownFile = (filePath) => {
    try {
        const markdownContent = fs.readFileSync(filePath, 'utf-8');
        const data = grayMatter(markdownContent).data;
  
        const event = {
            event_name: data.event_name,
            event_poster: data.event_poster,
            event_link: data.event_link,
            event_start_date: data.event_start_date,
            event_end_date: data.event_end_date,
            event_pictures: data.event_pictures,
            event_color: data.event_color,
            event_description: data.event_description
        };
    
        return event;
      } catch (error) {
        console.error('Error reading Markdown file:', error);
        return null;
      }
};

const processBannerMarkdownFile = (filePath) => {
  try {
      const markdownContent = fs.readFileSync(filePath, 'utf-8');
      const data = grayMatter(markdownContent).data;

      const banner = {
          banner_text: data.banner_text,
      };
  
      return banner;
    } catch (error) {
      console.error('Error reading Markdown file:', error);
      return null;
    }
};

const getSortedBannerList = () => {
  const dirPath = path.join(__dirname, '../src/content/banner');
  const files = fs.readdirSync(dirPath);
  const bannerList = [];

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const bannerData = processBannerMarkdownFile(filePath);

    if (bannerData) {
        if (bannerData.banner_text === 'No banner text given') {
            console.error("No banner text given") 
          }else{
            bannerList.push(bannerData);
          }
    }
  });

  const sortedList = bannerList.sort((a, b) => (a.id < b.id ? 1 : -1));
  // TODO: make sure to only push {} object
  let data = JSON.stringify(sortedList)
  fs.writeFileSync("src/content/banner/bannerText.json", data)
  return sortedList;
};

    

const getSortedArtistList = () => {
  const dirPath = path.join(__dirname, '../src/content/artistOfTheMonth');
  const files = fs.readdirSync(dirPath);
  const artistList = [];

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const artistData = processArtistOfTheMonthMarkdownFile(filePath);

    if (artistData) {
        if (artistData.title === 'No title given') {
            console.error("No title given") 
          }else{
              artistList.push(artistData);
          }
    }
  });

  const sortedList = artistList.sort((a, b) => (a.id < b.id ? 1 : -1));
  // make sure to only push {} object
  let data = JSON.stringify(sortedList)
  fs.writeFileSync("src/content/artistOfTheMonth/artistOfTheMonth.json", data)
  return sortedList;
};

const getSortedEventsList = () => {
    const dirPath = path.join(__dirname, '../src/content/event');
    const files = fs.readdirSync(dirPath);
    const eventList = [];
  
    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      const eventData = processEventMarkdownFile(filePath);
  
      if (eventData) {
          if (eventData.event_link === 'No event link given') {
              console.error("No event link given") 
            }else{
                eventList.push(eventData);
            }
      }
    });
  
    const sortedList = eventList.sort((a, b) => (a.id < b.id ? 1 : -1));
    // TODO: make sure to only push {} object
    let data = JSON.stringify(sortedList)
    fs.writeFileSync("src/content/event/event.json", data)
    return sortedList;
};
  
const sortedArtistList = getSortedArtistList();
const sortedEventList = getSortedEventsList();
const sortedBannerList = getSortedBannerList()
console.log("getSortedBannerList" , sortedBannerList)
module.exports = {sortedArtistList: sortedArtistList, sortedEventList:sortedEventList, sortedBannerList:sortedBannerList};
