import './bolim3.css'

const Bolim3 = () => {
  return (
    <div style={{textAlign:'center'}}>
      <div>
      <br/><br/>
        <>
          <h3 style={{margin:0,padding:0}}>Ro'yhatdan o'tish</h3>
          <p>Malumotlar tekshiruvi</p>
        </>
        <br/><br/>
        <hr/>
        <br/><br/>
        <form action="" method='post'>
          <p >Ismingiz</p>
          <input type="text" name="" id="" placeholder='ismigiz..' />
          <p>Familiyangiz</p>
          <input type="text" name="" id="" placeholder='familyangiz..' />
          <p>Email</p>
          <input type="text" name="" id="" placeholder='email..'/>
          <p>Tel Nomer</p>
          <input type="number" name="" id="" placeholder='number...'/>
          
          <br />
          <br />
          <input style={{backgroundColor:'blue'}} type="submit" name="" id="cubmit" />
        </form>
      </div>

    </div>
  )
}

export default Bolim3