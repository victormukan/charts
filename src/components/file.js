import _ from 'lodash';

// eslint-disable-next-line
export const line = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.'

const counts = _.countBy(line.toLowerCase().split(''));

export const chartData = [];


Object
  .keys(counts)
  .forEach(i => 
    chartData.push({ 
      key: i, 
      value: counts[i], 
      frequency: Math.round(counts[i] / line.length * 1000) / 1000 
    })
  )

chartData.sort((a, b) => a.key.charCodeAt(0) - b.key.charCodeAt(0));


