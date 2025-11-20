function ExportData()
{
		
	var data = fetch("http://localhost:8090/WebServices/consultarLogSensor.php").then(
    function(u){ return u.json();}
  ).then(
    function(json){
       console.log(json); //datos = json;
	   
	   var ws = XLSX.utils.json_to_sheet(json);

    
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "DATOS");
    
    
    XLSX.writeFile(wb, "LOG_SENSOR.xlsx");
    }
  )
  
}
