import TinyArea from '../../../src/tinyChart/tiny-area';
import { fireWorks } from '../../data/fireworks-sales';

describe('tinyLine plot', () => {
  const canvasDiv = document.createElement('div');
  canvasDiv.style.width = '200px';
  canvasDiv.style.height = '100px';
  canvasDiv.style.left = '30px';
  canvasDiv.style.top = '30px';
  canvasDiv.id = 'canvas';
  document.body.appendChild(canvasDiv);

  const data = [ {
    year: '1991',
    value: 3
  }, {
    year: '1992',
    value: 4
  }, {
    year: '1993',
    value: 3.5
  }, {
    year: '1994',
    value: 5
  }, {
    year: '1995',
    value: 4.9
  }, {
    year: '1996',
    value: 6
  }, {
    year: '1997',
    value: 7
  }, {
    year: '1998',
    value: 9
  }, {
    year: '1999',
    value: 13
  } ];

  it('图形渲染', () => {
    const tinyArea = new TinyArea(canvasDiv, {
      width: 200,
      height: 100,
      data: fireWorks,
      xField: 'Data',
      yField: 'scales',
      smooth: true,
      guideLine: [ {
        type: 'mean',
        text: {
          position: 'end',
          content: '均值线',
          style: {
            textAlign: 'end'
          }
        }
      } ]
    });
    tinyArea.render();
  });

});
