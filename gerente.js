var Gerente = function () {
    
    var sThis = this;
    
    // Por qué creamos esta estructura? Por qué no declarar cada uno de los atributos como variables separadas?
    this.datosGerente = {
        nombreCompleto : '',
        numeroDocumento : '',
        telefono : ''
    };

    var getNombreCompleto = function () {
        return sThis.datosGerente.nombreCompleto;
    },
    setNombreCompleto = function (nombreCompleto) { // Por qué este setter no se declara con 'var'?
        sThis.datosGerente.nombreCompleto = nombreCompleto;
    },

    // Por qué este getter no se declara con 'var'?
    getNumeroDocumento = function () {
        return sThis.datosGerente.numeroDocumento;
    },
    setNumeroDocumento = function (numeroDocumento) {
        sThis.datosGerente.numeroDocumento = numeroDocumento;
    },

    getTelefono = function () {
        return sThis.datosGerente.telefono;
    },
    setTelefono = function (telefono) {
        sThis.datosGerente.telefono = telefono;
    };

    return {
        getNombreCompleto : getNombreCompleto,
        setNombreCompleto : setNombreCompleto,
        getNumeroDocumento : getNumeroDocumento, 
        setNumeroDocumento : setNumeroDocumento,
        getTelefono : getTelefono,
        setTelefono : setTelefono    
    } // sin ;

};

module.exports = Gerente;