import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatHubComponent } from './chat-hub.component';

describe('ChatHubComponent', () => {
  let component: ChatHubComponent;
  let fixture: ComponentFixture<ChatHubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatHubComponent]
    });
    fixture = TestBed.createComponent(ChatHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
