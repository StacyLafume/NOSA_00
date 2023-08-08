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

const processMarkdownFile = (filePath) => {
    try {
        const markdownContent = fs.readFileSync(filePath, 'utf-8');
        const data = grayMatter(markdownContent).data;
    
        const dateString = data.date ? data.date.toString() : new Date().toISOString();
        const parsedDate = formatDate(dateString);
        const publishedDate = `${parsedDate.monthName} ${parsedDate.day}, ${parsedDate.year}`;
        const datestring = `${parsedDate.year}-${parsedDate.month}-${parsedDate.day}T${parsedDate.time}:00`;
        const date = new Date(datestring);
        const timestamp = date.getTime() / 1000;
    
        const artist = {
          id: timestamp,
          title: data.name ? data.name : 'No title given',
          date: publishedDate ? publishedDate : 'No date given',
          time: parsedDate.time,
          thumbnail: data.thumbnail || 'No thumbnail given', // Use default value if data.thumbnail is missing or falsy
          artist_statement: data.artist_statement || 'No artist statement given', // Use default value if data.artist_statement is missing or falsy
          exhibition_statement: data.exhibition_statement || 'No exhibition statement given', // Use default value if data.exhibition_statement is missing or falsy
          headshot: data.headshot || 'No headshot given', // Use default value if data.headshot is missing or falsy
          main_artwork: data.main_artwork || 'No main artwork given', // Use default value if data.main_artwork is missing or falsy
        };
    
        return artist;
      } catch (error) {
        console.error('Error reading Markdown file:', error);
        return null;
      }
    };
    

const getSortedArtistList = () => {
  const dirPath = path.join(__dirname, '../src/content/artistOfTheMonth');
  const files = fs.readdirSync(dirPath);
  const artistList = [];

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const artistData = processMarkdownFile(filePath);

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

const sortedArtistList = getSortedArtistList();

module.exports = sortedArtistList;
