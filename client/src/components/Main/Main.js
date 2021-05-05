import './Main.css';

const Main = ({
	posts
}) => {
	console.log(posts);
	
    return (
        <main className="main-container">
            <h1></h1>
            {posts.map(x => 
				<p key={x.id}>{x.content}</p>
			)}
        </main>
    );
}

export default Main;