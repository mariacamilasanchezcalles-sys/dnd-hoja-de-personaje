/* Catalogo editable de opciones que pueden reutilizarse en la hoja. */
window.CATA_CATALOG = {
  spells: [
    {id:'spell-fireball', name:'Bola de fuego', level:3, source:'Catalogo', dc:'DC 14', save:'Salvacion de Destreza (mitad si acierta)', dmg:'8d6 fuego', desc:'Esfera de fuego de 6 m de radio.'},
    {id:'spell-hellish-rebuke', name:'Reprimenda infernal', level:1, source:'Catalogo', dc:'DC 14', save:'Salvacion de Destreza (mitad si acierta)', dmg:'2d10 fuego', desc:'Reaccion: cuando te danan, fuego infernal sobre el atacante.'},
    {id:'spell-darkness', name:'Oscuridad', level:2, source:'Catalogo', dc:'-', save:'Sin salvacion', dmg:'-', desc:'Oscuridad magica en una esfera de 4.5 m.'},
    {id:'spell-sanctuary', name:'Santuario', level:1, source:'Catalogo', dc:'DC 14', save:'Salvacion de Sabiduria', dmg:'-', desc:'Proteges a una criatura dispuesta; quien la ataque debe superar una salvacion o elegir otro objetivo.'}
  ],
  feats: [
    {id:'feat-lucky', name:'Afortunado', desc:'Puntos de suerte para darte ventaja en una tirada propia o desventaja a un ataque enemigo.'},
    {id:'feat-tough', name:'Duro', desc:'Aumenta tus PG maximos y vuelven a aumentar cuando subes de nivel.'},
    {id:'feat-resilient', name:'Resiliente', desc:'+1 a una caracteristica y competencia en su tirada de salvacion.'},
    {id:'feat-savage-attacker', name:'Atacante Salvaje', desc:'Una vez por turno, tira dos veces los dados de dano del arma y usa el resultado que prefieras.'}
  ],
  invocations: [
    {id:'invocation-eldritch-smite', name:'Castigo Arcano', desc:'Al golpear con tu arma de pacto, gasta un espacio para causar dano extra y derribar al objetivo si falla su salvacion.'},
    {id:'invocation-thirsting-blade', name:'Filo Sediento', desc:'Al tomar la accion de Atacar, haces un ataque extra con tu arma de pacto.'},
    {id:'invocation-shadows', name:'Uno con las Sombras', desc:'En penumbra u oscuridad puedes volverte invisible mientras permanezcas inmovil.'}
  ],
  classFeatures: [
    {id:'feature-asi', name:'Mejora de Caracteristica', desc:'Aumenta puntuaciones o toma un dote general en ciertos niveles.'},
    {id:'feature-magic', name:'Magia de Pacto', desc:'Tus espacios de conjuro se recuperan tras un descanso corto o largo.'}
  ]
};
