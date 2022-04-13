import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectService } from '../shared/project.service';
import { Project } from './project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  ELEMENT_DATA: Project[] = [];
  projects: any;

  constructor(private project: ProjectService) { }

  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  dataSource!: MatTableDataSource<any>;
  getProject!: Project[];
  title?: any;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;


  ngOnInit(): void {
    this.project.getProject().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    })
  }





  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
  }


  Search() {
    if (this.title == "") {
      this.ngOnInit();
    }
    else {
      this.getProject = this.getProject.filter(res => {
        return res.title?.toLocaleLowerCase().match(this.title?.toLocaleLowerCase());
      })
    }
  }

}
