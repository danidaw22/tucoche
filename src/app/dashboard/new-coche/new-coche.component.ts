import { CochesService } from './../../services/coches/coches.service';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coche } from 'src/app/models/coche.models';
import { NotifierService } from 'angular-notifier';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";

@Component({
  selector: 'app-new-coche',
  templateUrl: './new-coche.component.html',
  styleUrls: ['./new-coche.component.scss']
})
export class NewCocheComponent implements OnInit {

  sForm: FormGroup

  editCoche = false;
  id= "";
  file:any | undefined = null
  file2:any | undefined = null
  coche : Coche | undefined
  private readonly notifier: NotifierService;
  downloadURL: Observable<string> | undefined;
  fb2: any;
  urlPhoto="";
  isSend=false;
  galeria:string[]= []
  isSubmitted = false

  constructor(private fb: FormBuilder, private cocheService:CochesService,private router:Router, private active:ActivatedRoute,notifierService: NotifierService,private storage:AngularFireStorage) {
    this.sForm = this.fb.group({
      titulo:[null,[Validators.required,Validators.minLength(2)]],
      descripcion:[null,[Validators.required,Validators.minLength(10)]],
      precio:[],
      marca:[null,[Validators.required,Validators.minLength(2)]],
      modelo:[null,[Validators.required,Validators.minLength(2)]],
      km:[],
      localidad:[null,[Validators.minLength(2)]],
      combustible:[null,[Validators.minLength(2)]],
      color:[],
      npuertas:[],
      nplazas:[],
      cambio:[null,[Validators.minLength(2)]],
      anno:[]
    })

    this.notifier = notifierService;
   }

  ngOnInit() {
    this.active.params.subscribe( params => {
      if(params.id){
        this.editCoche = true;
        this.id=params.id
      }
    })

    if(this.editCoche){
       this.loadData(this.id)
    }
  }

  get f(): any{
    return this.sForm.controls
  }

  saveCar(){

    this.isSend = true

    this.isSubmitted = false

    if(this.sForm.invalid){
      this.isSubmitted = true
      console.log("error, el formulario esta mal")
      return
    }

    let carData = {
      titulo:this.sForm.controls.titulo.value,
      descripcion:this.sForm.controls.descripcion.value,
      marca:this.sForm.controls.marca.value,
      modelo:this.sForm.controls.modelo.value,
      km:this.sForm.controls.km.value,
      precio:this.sForm.controls.precio.value,
      localizacion:this.sForm.controls.localidad.value,
      combustible:this.sForm.controls.combustible.value,
      color:this.sForm.controls.color.value,
      puertas:this.sForm.controls.npuertas.value,
      cambio:this.sForm.controls.cambio.value,
      plazas:this.sForm.controls.nplazas.value,
      anno:this.sForm.controls.anno.value,
      photo:this.coche?.photo,
      galeria:this.galeria
    }

    if(this.editCoche){
      if(this.file != null){
        //llamo a subir imagen
        this.subirImagen(carData)
      } else {
        this.cocheService.updateCoche(this.id,carData).subscribe(
          data => {
            this.router.navigate(['/panel/all'])
            this.notifier.notify('success', 'Coche actualizado correctamente');

          },
          error => {
            this.isSubmitted = true
            this.notifier.notify('error', 'Vaya parece que ha ocurrido un error');
            console.log(error)
          }
        )
      }
    }else{

      if(this.file != null){
        //llamo a subir imagen
        this.subirImagen(carData)
      } else {
      this.cocheService.saveCoche(carData).subscribe(
        data => {
          console.log('Coche añadido')

          this.router.navigate(['/panel/all'])
        },
        error => {
          this.isSubmitted = true
          this.notifier.notify('error', 'Vaya parece que ha ocurrido un error');
          console.log(error)
        }
      )
      }

    }


  }

  loadData(id:any){
    this.cocheService.getcoche(id).subscribe(
      (data: Coche) => {
        console.log('entra2', data)
        this.coche = data;
        this.sForm.patchValue({
          titulo:this.coche.titulo,
          descripcion:this.coche.descripcion,
          precio:this.coche.precio,
          marca:this.coche.marca,
          modelo:this.coche.modelo,
          km:this.coche.km,
          localidad:this.coche.localizacion,
          combustible:this.coche.combustible,
          color:this.coche.color,
          npuertas:this.coche.puertas,
          nplazas:this.coche.plazas,
          cambio:this.coche.cambio,
          anno:this.coche.anno
        })
      },
      error => {
        this.router.navigate(['/panel/all'])
        console.log('Error', error)
      }
    )
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  onFileSelected2(event: any) {
    this.isSubmitted = true
    this.file2 = event.target.files;

    //console.log(this.file2, this.file2.length)



    for (const file of this.file2) {


    let num = Math.random() * (50000 - 1) + 1;
    var n = Date.now();
    let filePath = `RoomsImages/${n}`+this.file2.name+num;
    let fileRef = this.storage.ref(filePath);
      //console.log(file);

     let task = this.storage.upload(filePath,file);
      task
          .snapshotChanges()
          .pipe(
            finalize(async()=>{
              this.downloadURL = await fileRef.getDownloadURL();
              this.downloadURL.subscribe(url => {
                if (url) {
                  this.galeria.push(url)
                }
              })
            })
          )
          .subscribe(url => {
          });
    }

    this.isSubmitted = false

  }

  subirImagen(carData:any){
    var n = Date.now();
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`,this.file);
 task
    .snapshotChanges()
    .pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(url => {
          if (url) {
            this.fb2 = url;
            this.urlPhoto = url

            carData.photo = url

            console.log(carData)

            if(this.editCoche){
              this.cocheService.updateCoche(this.id,carData).subscribe(
                data => {
                  this.router.navigate(['/panel/all'])
                  this.notifier.notify('success', 'Coche actualizado correctamente');
                },
                error => {
                  this.isSubmitted = false
                  this.notifier.notify('error', 'Vaya parece que ha ocurrido un error');
                  console.log(error)
                }
              )

            } else {
              this.cocheService.saveCoche(carData).subscribe(
                data => {

                  this.router.navigate(['/panel/all'])
                },
                error => {
                  this.isSubmitted = false
                  this.notifier.notify('error', 'Vaya parece que ha ocurrido un error');
                  console.log(error)
                }
              )
            }

          }
          console.log(this.fb2);
        });
      })
    )
    .subscribe(url => {
      if (url) {
        console.log(url);
      }
    });
  }

}
