const api_key = 'AIzaSyBQ0OBVJR5LwVP7O1wFRSbfMbLCLvWRLnE';
const playList_id = 'PLM7Wu-2kzIQNKIs1hkRrlcXbwun3W_hWg';
const base_url = 'https://www.googleapis.com/youtube/v3/playlistItems';
const num = 5;
const result_url = `${base_url}?part=snippet&key=${api_key}&playlistId=${playList_id}&maxResults=${num}`;

fetch(result_url)
	.then((data) => data.json())
	.then((json) => {
		console.log(json.items);
		let tags = '';
		json.items.forEach((el) => {
			tags += `
        <article>
          <img src=${el.snippet.thumbnails.standard.url} />
          <h2>${el.snippet.title}</h2>
          <p>${el.snippet.description}</p>
          <span>${el.snippet.publishedAt}</span>
        </article>
      `;
		});

		document.body.innerHTML = tags;
	});

/*
브라우저 url을 통해서 데이터 요청방식 : GET방식
요청 url : 기본url?name=value&name=value
QueryString : 기본 요청 url뒤에 ?뒤쪽으로 name=value쌍으로 옵션을 담아서 전달하는 방식
*/
