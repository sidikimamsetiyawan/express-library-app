function compareDeep2(a, b) {

    const tmpStra = a.attribute;
    const tmpStrb = b.attribute;
  
    const cleanA = tmpStra.match(/\[\d+/g);
    const cleanB = tmpStrb.match(/\[\d+/g);
  
    if (cleanA == null) return -1;
    if (cleanB == null) return 1;
  
    for (let i = 0; i < cleanA.length && i < cleanB.length; i++) {
      const numA = parseInt(cleanA[i].slice(1));
      const numB = parseInt(cleanB[i].slice(1));
  
      if (numA < numB) return -1;
      if (numA > numB) return 1;
    }
  
    if (cleanA.length !== cleanB.length) return cleanA.length - cleanB.length;
  
    const tmpIgA = tmpStra.replace(/\[\d+\]/g, '');
    const tmpIgB = tmpStrb.replace(/\[\d+\]/g, '');
  
    return tmpIgA.localeCompare(tmpIgB);
}

const compareDeep = (req, res) => {
    const rawData = req.body;

    if (!Array.isArray(rawData.attributes)) {
        return res.status(400).json({ error: 'Invalid input format: attributes should be an array.' });
    }

    rawData.attributes.sort(compareDeep2);

    // Return the sorted data
    res.json({
        message: 'Data sorted successfully',
        sortedData: rawData
      });
    
}


  // Sort the data using compareDeep2
  

module.exports = {
    compareDeep,
}
  