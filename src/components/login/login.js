
 function InputForm (props){
    return (<div>
        <form>
    <label for="email" className="form-label">Correo Electrónico</label>
        <input type="email" className="form-input" name="email" id="email" autocomplete="on" >
        </input>
    <label for="password" className="form-label">Contraseña</label>
          <input type="password" className="form-input" name="password" id="password" autocomplete="on">
            </input>
          <button type="submit" className="form-btn" id="form-btn">Enviar</button>
</form>
    </div>
 )}

export default InputForm 

  