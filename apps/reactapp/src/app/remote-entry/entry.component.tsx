import { Component, ElementRef, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import { BasicInfo } from './components/basic-info/basic-info';
import { WelcomePage } from './components/welcome-page/welcome-page';
@Component({
  selector: 'sample-mfe-reactapp-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class RemoteEntryComponent {
  @ViewChild('containerRef', { static: true }) container: ElementRef;


  async ngOnInit() {
    this.render();
  }
  render() {
    // let flObject: any = {
    //   resourceData: this.resource,
    //   flUser: this.flUserDetails[0],
    //   flMembers: this.flMembers
    // }
    const root = createRoot(this.container.nativeElement);
    // root.render(React.createElement(WelcomePage,{title:'My Dashboard'}))
    root.render(
      <BrowserRouter>
        <Routes>
          <Route path="reactapp" element={<WelcomePage />}></Route>
          <Route path="reactapp/*">
               <Route path='basicInfo' element={<BasicInfo></BasicInfo>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }


}
