//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace APITest.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Perfile
    {
        public Perfile()
        {
            this.PerfilesMetodos = new HashSet<PerfilesMetodo>();
        }
    
        public int CodigoPerfil { get; set; }
        public int CodigoEmpresa { get; set; }
        public string Perfil { get; set; }
        public Nullable<bool> Estado { get; set; }
    
        public virtual Empresa Empresa { get; set; }
        public virtual ICollection<PerfilesMetodo> PerfilesMetodos { get; set; }
    }
}
