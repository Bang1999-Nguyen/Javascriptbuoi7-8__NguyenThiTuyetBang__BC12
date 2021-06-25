function validator() {
    this.checkIfValueIsEmpty = function(value, Id, mess) {
        if(value === '') {
            getEle(Id).style.display = 'block';
            getEle(Id).innerHTML = mess;
            return false;
        }
        getEle(Id).style.display = 'none';
        getEle(Id).innerHTML = '';
        return true;
    }
    this.checkValueIsInteger = function(value, Id, mess) {
        if(isNaN(value) || value % 1 !== 0) {
            getEle(Id).style.display = 'block';
            getEle(Id).innerHTML = mess;
            return false;
        }
        getEle(Id).style.display = 'none';
        getEle(Id).innerHTML = '';
        return true;
    }
}