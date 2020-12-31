const router = require('express').Router();
let Material = require('../models/material');


router.route('/').get((req, res) => {
    Material.find() 
         .then(materials => res.json(materials))  
        .catch(err => res.status(400).json('Error: ' + err));
    });


router.route('/add').post((req, res) => { //create?
     const material = req.body.material; 
      const description = req.body.description; 
       const title = req.body.title
       const video = req.body.video
        
  const newMaterial = new Material({  
    material,  
    description,  
    title,
    video
    }); 
      
  newMaterial.save()  
  .then(() => res.json('Material added!'))  
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {  
  console.log(req.params)
    Material.findById(req.params.id)    
    .then(material => res.json(material))    
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req, res) => {  
    Material.findByIdAndDelete(req.params.id)    
    .then(() => res.json('Material deleted.'))    
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req, res) => { 
  //console.log(req.body) 
    Material.findById(req.params.id)    
    .then(material => {      
        material.material = req.body.material;      
        material.description = req.body.description;      
        material.title = req.body.title;
        material.video = req.body.video;      
      
    
        material.save()        
      .then(() => res.json('material updated!'))        
      .catch(err => res.status(400).json('Error: ' + err));    
    })    
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;