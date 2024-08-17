var XLSX=require('xlsx');
var fs=require('fs')
var workbook=XLSX.readFile('xlfile/TEST_DATA.xlsx')
var worksheet=workbook.Sheets['HRM']

testData=XLSX.utils.sheet_to_json(worksheet)
console.log(testData)
fs.writeFile('cypress/fixtures/exceltojson/testdata.json',JSON.stringify(testData),(err) =>{


    if(err){

        console.log(err)
        return
    }
})