

export default function Home() {
  return (
    <div>
    <a href="localhost:3000">
      <h1 id="Adress">hello</h1>
    </a>
    <a href="l">
      Download the Sales Repor(PDF);
    </a>
    <p/>
    <a href="l" download="a.exe">
      Download the Sales Repor(PDF);
    </a>

    <dl>
      <dt>solilquy</dt>
      <dd>ㅎㅇ? ㅂㅇ
        ㅎㅇ
      </dd>
      <dt>monologue </dt>
      <dd>hi bye</dd>
      <dd>wut?</dd>
    </dl>

    <p>
      <strong>HTML <code>&lt; blockquote &gt;</code> </strong>
      (or
        <em>HTML 인용블록</em>)는 안쪽의 텍스트가....
        나타냅니다.
    </p>
    <p>다음은 브롥 인용구</p>
    <p>다음은 블록 인용구입니다.</p>

    <blockquote
      cite="https://developer.mozilla.org/ko/docs/Web/HTML/Element/blockquote">
      <p>
        <strong>HTML <code>&lt;blockquote&gt;</code> 요소</strong> (또는
        <em>HTML 인용 블록 요소</em>)는 안쪽의 텍스트가 긴 인용문임을 나타냅니다.
      </p>
    </blockquote>

    <p>
    <cite>MDN 인용구 페이지</cite>
      <q cite="htmp"> 
        단락나누기가 필요없는 짤은 인용구 
          
      </q>
      
    </p>
    
    <p><abbr title="미국 항공 우주">NASA</abbr>()는 흥미로운 일을 많이 하고 있습니다.</p>
    <address>
      <p>
        크리스 밀스<br />
        맨체스터<br />
        그림노스<br />
        영국
      </p>

      <ul>
        <li>전화: 01234 567 890</li>
        <li>이메일: me@grim-north.co.uk</li>
      </ul>
    </address>
    <p>2<sup>2</sup>
    O<sub>4</sub>
    </p>
    
    <code>const para = document.querySelector</code>
    <pre><code>const para = document.querySelector</code></pre>

    <pre><code>const para = document.querySelector('p');

    para.onclick = function() &#123;
      alert('Owww, stop poking me!')
    &#125;</code></pre>


    <div width="100" height="100"/>
    <form action="backend/api" method="POST" target="_blank">
      <label for="username">Username: </label>
      <input type="text" aria-label="Search" placeholder="Search" id="username" name="username1" required/>
      <button type="submit">Submit!</button>
      <label for="options">Choose an option:</label>
      <select id="options" name="options">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </select>
    </form>
    <time dateTime="2016-01-20">20 January 2016</time>
    </div>
  );
}
