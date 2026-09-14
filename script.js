function pagoIndividual() {
    document.querySelector(".contenido").innerHTML = `
        <div class="consulta">
            <h2>Ingrese su Cuenta Contrato EAAB</h2>

            <label for="referencia">Cuenta contrato</label>
            <input
                type="text"
                id="referencia"
                placeholder="Cuenta contrato"
            >

            <label for="tipoDeuda">Tipo de deuda</label>
            <select id="tipoDeuda">
                <option value="">Seleccione una opción</option>
                <option value="factura">Factura de alcantarillado y aseo</option>
                <option value="estado">Estado de cuentas</option>
                <option value="financiaciones">Cuotas de financiaciones solicitadas</option>
                <option value="todos">Todos</option>
            </select>

            <div class="texto-excel">
                Si desea pagar múltiples cuentas contrato, también puede subir un
                archivo de Excel XLSX con hasta 100 cuentas que debe contener una
                cuenta contrato en cada celda. Para seleccionar el archivo
                <label for="archivoExcel">haga clic aquí.</label>

                <input
                    type="file"
                    id="archivoExcel"
                    accept=".xlsx"
                    style="display: none;"
                >
            </div>

            <button class="btn-continuar" onclick="continuarConsulta()">
                Agregar >>
            </button>
        </div>
    `;
}
function continuarConsulta() {

    const referencia = document.getElementById("referencia").value.trim();
    const tipoDeuda = document.getElementById("tipoDeuda").value;

    if (referencia === "") {
        alert("Por favor ingrese la cuenta contrato.");
        return;
    }

    if (tipoDeuda === "") {
        alert("Por favor seleccione el tipo de deuda.");
        return;
    }

    const ultimoDigito = referencia.charAt(referencia.length - 1);

    const valoresDemo = {
        "1": 278350,
        "2": 135987,
        "3": 325870,
        "4": 185970,
        "5": 324520,
        "6": 193820,
        "7": 240320,
        "8": 101900,
        "9": 420400,
        "0": 152400
    };

    const valor = valoresDemo[ultimoDigito];

    if (!valor) {
        alert("La referencia no es válida.");
        return;
    }

    const valorAseo = 18500;
    const total = valor + valorAseo;

    const formatoPesos = new Intl.NumberFormat("es-CO");

    document.querySelector(".contenido").innerHTML = `

        <div class="resultado-pago">

            

            <!-- CONTENEDOR DESLIZABLE -->
            <div class="tabla-contenedor">

                <div class="tabla-factura">

                    <!-- ENCABEZADOS -->
                    <div class="encabezado-tabla">

                        <div>Pagar</div>

                        <div>
                            Inscribir<br>
                            en Factura
                        </div>

                        <div>Tipo</div>

                        <div>
                            Cuenta<br>
                            Contrato
                        </div>

                        <div>Dirección</div>

                        <div>
                            Valor<br>
                            Acueducto
                        </div>

                        <div>
                            Valor<br>
                            Aseo
                        </div>

                        <div>
                            Valor<br>
                            Total
                        </div>

                        <div>Estado</div>

                        <div>Borrar</div>

                    </div>


                    <!-- INFORMACIÓN DE LA CUENTA -->
                    <div class="fila-factura">

                        <div>
                            <button
                                class="interruptor"
                                type="button">
                            </button>
                        </div>

                        <div>
                            <button
                                class="interruptor"
                                type="button">
                            </button>
                        </div>

                        <div>
                            Facturación<br>
                            Periódica
                        </div>

                        <div>
                            ${referencia}
                        </div>

                        <div>
                            **
                        </div>

                        <div>
                            $${formatoPesos.format(valor)}
                        </div>

                        <div>
                            $${formatoPesos.format(valorAseo)}
                        </div>

                        <div>
                            <strong>
                                $${formatoPesos.format(total)}
                            </strong>
                        </div>

                        <div class="estado-pendiente">
                            Pago<br>
                            Pendiente
                        </div>

                        <div>
                            <button
                                type="button"
                                class="btn-borrar"
                                onclick="borrarFactura()">
                                🗑️
                            </button>
                        </div>

                    </div>

                </div>

            </div>


            
            <div class="seccion-pago-demo">

    <div class="titulo-seccion">
        
    </div>

    <div class="campo-pago">
        <span class="etiqueta-campo">Medios de Pago Disponibles</span>

        <select>
            <option>Seleccione un medio de pago</option>
            <option>PSE — </option>
        </select>
    </div>


    <div class="titulo-seccion datos-pagador">
        <span class="icono-seccion">♙</span>
        <span>Datos del Pagador</span>
    </div>


    <div class="campo-pago">
        <span class="etiqueta-campo">Banco</span>

       <select id="bancoSeleccionado">

    <option value="">Seleccione una entidad</option>

    <!-- BANCOS -->
    <option value="Banco de Bogotá">Banco de Bogotá</option>
    <option value="Itaú">Itaú</option>
    <option value="Citibank">Citibank</option>
    <option value="GNB Sudameris">GNB Sudameris</option>
    <option value="BBVA Colombia">BBVA Colombia</option>
    <option value="Scotiabank Colpatria">Scotiabank Colpatria</option>
    <option value="Davivienda">Davivienda</option>
    <option value="Banco Agrario">Banco Agrario</option>
    <option value="Banco Pichincha">Banco Pichincha</option>
    <option value="Bancamía">Bancamía</option>
    <option value="Banco Serfinanza">Banco Serfinanza</option>
    <option value="Bancolombia">Bancolombia</option>
    <option value="Banco Popular">Banco Popular</option>
    <option value="Banco de Occidente">Banco de Occidente</option>
    <option value="Banco Caja Social">Banco Caja Social</option>
    <option value="Banco AV Villas">Banco AV Villas</option>
    <option value="Bancoomeva">Bancoomeva</option>
    <option value="Banco Cooperativo Coopcentral">Banco Cooperativo Coopcentral</option>
    <option value="Banco Credifinanciera">Banco Credifinanciera</option>
    <option value="Banco Falabella">Banco Falabella</option>
    <option value="Banco Santander">Banco Santander</option>

    <!-- COOPERATIVAS -->
    <option value="Confiar">Confiar</option>
    <option value="Cotrafa">Cotrafa</option>
    <option value="Cooperativa Financiera de Antioquia">
        Cooperativa Financiera de Antioquia
    </option>

    <!-- BILLETERAS DIGITALES -->
    <option value="Nequi">Nequi</option>
    <option value="Daviplata">Daviplata</option>
    <option value="RappiPay">RappiPay</option>

    <!-- COMPAÑÍAS DE FINANCIAMIENTO -->
    <option value="Coltefinanciera">Coltefinanciera</option>
    <option value="Giros y Finanzas">Giros y Finanzas</option>
    <option value="Financiera Dann Regional">
        Financiera Dann Regional
    </option>

    <!-- DEPÓSITOS ELECTRÓNICOS / SEDPE -->
    <option value="MOVii">MOVii</option>
    <option value="dale!">dale!</option>

</select>
    </div>


    <div class="campo-pago">
        <span class="etiqueta-campo">Tipo de Documento</span>

        <select>
            <option>Seleccione su Tipo de Documento</option>
            <option>Cédula de ciudadanía </option>
            <option>Cédula de extranjería </option>
        </select>
    </div>



    <div class="campo-pago">
        <span class="etiqueta-campo">Número de Documento</span>
        <input
            type="text"
            placeholder="Número de Documento"
        >
    </div>


    <div class="campo-pago">
        <span class="etiqueta-campo">Nombres</span>
        <input
            type="text"
            placeholder="Nombres"
        >
    </div>


    <div class="campo-pago">
        <span class="etiqueta-campo">Apellidos</span>
        <input
            type="text"
            placeholder="Apellidos"
        >
    </div>


    <div class="campo-pago">
        <span class="etiqueta-campo">Teléfono</span>
        <input
            type="tel"
            placeholder="Teléfono"
        >
    </div>


    <div class="campo-pago">
        <span class="etiqueta-campo">Correo Electrónico</span>
        <input
            type="email"
            placeholder="Correo Electrónico"
        >
    </div>


    <div class="campo-pago">
        <span class="etiqueta-campo">Dirección Física</span>
        <input
            type="text"
            placeholder="Dirección Física"
        >
    </div>

</div>


            <!-- RESUMEN -->
            <div class="resumen-total">

                <span>
                    Total a pagar
                </span>

                <strong>
                    $${formatoPesos.format(total)}
                </strong>

            </div>

                <div class="boton-pse" onclick="realizarPago()">
    <img src="./pse.png" alt="PSE">
</div>

        </div>
    `;
}

function pagoVarias() {
    pagoIndividual();
}
function realizarPago() {

    const campos = document.querySelectorAll(
        ".seccion-pago-demo input, .seccion-pago-demo select"
    );

    for (const campo of campos) {

        if (
            campo.value.trim() === "" ||
            campo.value === "Seleccione un medio de pago" ||
            campo.value === "Seleccione una entidad" ||
            campo.value === "Seleccione un banco" ||
            campo.value === "Seleccione su Tipo de Documento"
        ) {
            alert("Por favor complete todos los datos antes de continuar.");
            campo.focus();
            return;
        }
    }

    const banco = document.getElementById("bancoSeleccionado").value;

    const resumen = document.querySelector(".resumen-total strong");

    if (!resumen) {
        alert("No se encontró el valor a pagar.");
        return;
    }

    const total = resumen.textContent;

    // Guardamos temporalmente los datos de la simulación
    sessionStorage.setItem(
        "datosPagoDemo",
        JSON.stringify({
            banco: banco,
            total: total
        })
    );

    // Ir a la siguiente página
    window.location.href = "pago-demo.html";
}