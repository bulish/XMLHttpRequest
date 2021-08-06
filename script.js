/**
 * function creates XMLHttpRequest and fetches JSON data,
 * it is called when document.body is loaded
 */

const getData = () => {
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		// if statement checks if the request and the response were successfull
		if (request.status === 200 && request.readyState === 4) {
			// JSON -> objects
			const data = JSON.parse(request.responseText);

			/**
			 * function creates elements and adds classes
			 */

			const getStyles = () => {
				// this div contains all the cards
				let container = document.createElement('div');
				container.classList = 'container';
				document.body.appendChild(container);

				// creating cards with the elements
				for (let i = 0; i < data.length; i++) {
					let div = document.createElement('div');
					div.classList = 'container__card';
					container.appendChild(div);

					let cardIcon = document.createElement('i');
					cardIcon.innerHTML = data[i].icon;
					div.appendChild(cardIcon);

					let cardTitle = document.createElement('h2');
					cardTitle.innerHTML = data[i].title;
					div.appendChild(cardTitle);

					let cardText = document.createElement('p');
					cardText.innerHTML = data[i].text;
					div.appendChild(cardText);

                    let cardButton = document.createElement('button');
                    cardButton.innerHTML = '<a target=_blank href="' + data[i].link + '">READ MORE</a>';
                    div.appendChild(cardButton);
				}
			};
			getStyles();
		} else {
			console.log('error');
		}
	});
	request.open('GET', 'data.json');
	request.send();
};

document.body.addEventListener('onload', getData());
