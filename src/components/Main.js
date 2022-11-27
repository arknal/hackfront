import pic from '../images/landing.png';

function Main() {
  return (
    <main className="content">
      <div style={{'display': 'flex', 'justifyContent': 'center'}}>
        <img src={pic}
          width='1100px'
          alt=''
          height='700px'
          
          />
      </div>
    </main>
  );
}

export default Main;
