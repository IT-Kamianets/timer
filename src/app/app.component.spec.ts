it('should render timer component', () => {
  const fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.querySelector('app-timer')).toBeTruthy(); // Перевірка, чи рендериться компонент
});
